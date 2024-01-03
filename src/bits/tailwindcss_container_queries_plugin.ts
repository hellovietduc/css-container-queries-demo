/**
 * @file TailwindCSS container queries plugin with support for max width container queries
 * @see https://github.com/tailwindlabs/tailwindcss-container-queries
 */
import { type Container } from 'postcss';
import plugin from 'tailwindcss/plugin';
import type { PluginAPI } from 'tailwindcss/types/config';

// Override some types from TailwindCSS to be able to use private APIs.
// NOTE: This is not recommended, but it's the only way to achieve what we want.
interface CustomPluginAPI extends PluginAPI {
  // definition can be an object.
  addVariant: (name: string, definition: any) => void;

  // There's a postcss object.
  postcss?: any;
}

const parseValue = (value: string): number | null => {
  const numericValue = value.match(/^(\d+\.\d+|\d+|\.\d+)\D+/)?.[1] ?? null;
  if (numericValue === null) return null;
  return parseFloat(value);
}

const sort: (
  a: { value: string; modifier: string | null },
  b: { value: string; modifier: string | null }
) => number = (aVariant, zVariant) => {
  const a = parseFloat(aVariant.value);
  const z = parseFloat(zVariant.value);

  if (a === null || z === null) return 0;

  // Sort values themselves regardless of unit
  if (a - z !== 0) return a - z;

  const aLabel = aVariant.modifier ?? '';
  const zLabel = zVariant.modifier ?? '';

  // Explicitly move empty labels to the end
  if (aLabel === '' && zLabel !== '') {
    return 1;
  } else if (aLabel !== '' && zLabel === '') {
    return -1;
  }

  // Sort labels alphabetically in the English locale
  // We are intentionally overriding the locale because we do not want the sort to
  // be affected by the machine's locale (be it a developer or CI environment)
  return aLabel.localeCompare(zLabel, 'en', { numeric: true });
};

export default plugin(
  function containerQueries({
    matchUtilities,
    matchVariant,
    addVariant,
    theme,
    e,
    postcss,
  }: CustomPluginAPI) {
    const values: Record<string, string> = theme('containers') ?? {};

    /**
     * Register @container utility class
     */
    matchUtilities(
      {
        '@container': (value, { modifier }) => {
          return {
            'container-type': value,
            'container-name': modifier,
          };
        },
      },
      {
        values: {
          DEFAULT: 'inline-size',
          normal: 'normal',
        },
        modifiers: 'any',
      }
    );

    /**
     * Register @ variant
     */
    matchVariant(
      '@',
      (value = '', { modifier }) => {
        const parsed = parseValue(value);
        return parsed !== null
          ? `@container ${modifier ?? ''} (min-width: ${value})`
          : [];
      },
      {
        values,
        sort,
      }
    );

    /**
     * Register @max variant
     * @see https://github.com/tailwindlabs/tailwindcss-container-queries/pull/20
     */
    const maxVariantFn: (
      value: string,
      { modifier }: { modifier: string | null }
    ) => string | string[] = (value = '', { modifier }) => {
      const parsed = parseValue(value);
      return parsed !== null
        ? `@container ${modifier ?? ''} (max-width: ${value})`
        : [];
    };

    matchVariant('@max', maxVariantFn, {
      values,
      sort,
    });

    matchVariant('atMax', maxVariantFn, {
      values,
      sort,
    });

    /**
     * Register -@ variant
     * Use this to match elements that don't have a container ancestor.
     * This variant must be put last.
     * @example hhover:-@:m-0
     */
    addVariant('-@', ({ container }: { container: Container }) => {
      const clonedContainer = container.clone();
      clonedContainer.walkRules((rule: { selector: string }) => {
        // Reconstruct the original selector
        // .slice(1) to remove the leading dot
        const selector = e('-@:') + rule.selector.slice(1);

        // This will match elements that don't have any ancestor using
        // the `@container` utility class
        rule.selector = `&:not([class*="@container"] .${selector})`;
      });
      container.replaceWith(...clonedContainer.nodes);
    });
  },
  {
    theme: {
      containers: {},
    },
  }
);
