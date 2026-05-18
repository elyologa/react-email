import { renderAsync } from '@react-email/render';
import type { ReactElement } from 'react';

/**
 * Options for rendering an email component to HTML or plain text.
 */
export interface RenderOptions {
  /**
   * Whether to pretty-print the output HTML.
   * @default false
   */
  pretty?: boolean;
  /**
   * Whether to render as plain text instead of HTML.
   * @default false
   */
  plainText?: boolean;
}

/**
 * Renders a React Email component to an HTML string.
 *
 * @param component - The React element representing the email template.
 * @param options - Optional rendering configuration.
 * @returns A promise resolving to the rendered HTML (or plain text) string.
 *
 * @example
 * ```tsx
 * import { render } from './utils/render';
 * import WelcomeEmail from './emails/welcome';
 *
 * const html = await render(<WelcomeEmail name="John" />);
 * ```
 */
export async function render(
  component: ReactElement,
  options: RenderOptions = {}
): Promise<string> {
  const { pretty = false, plainText = false } = options;

  try {
    const output = await renderAsync(component, {
      pretty,
      plainText,
    });

    return output;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to render email component: ${error.message}`);
    }
    throw new Error('Failed to render email component: Unknown error');
  }
}

/**
 * Synchronously renders a React Email component to an HTML string.
 *
 * @param component - The React element representing the email template.
 * @param options - Optional rendering configuration.
 * @returns The rendered HTML (or plain text) string.
 *
 * @example
 * ```tsx
 * import { renderSync } from './utils/render';
 * import WelcomeEmail from './emails/welcome';
 *
 * const html = renderSync(<WelcomeEmail name="John" />);
 * ```
 */
export function renderSync(
  component: ReactElement,
  options: RenderOptions = {}
): string {
  const { render: renderSyncFn } = require('@react-email/render');
  const { pretty = false, plainText = false } = options;

  try {
    return renderSyncFn(component, { pretty, plainText });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Failed to synchronously render email component: ${error.message}`
      );
    }
    throw new Error(
      'Failed to synchronously render email component: Unknown error'
    );
  }
}
