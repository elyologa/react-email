/**
 * react-email
 *
 * A collection of high-quality, unstyled components for creating beautiful emails
 * using React and TypeScript.
 *
 * @packageDocumentation
 */

// Core rendering utilities
export { render } from './render';

// Email layout components
export { Html } from './components/html';
export { Head } from './components/head';
export { Body } from './components/body';
export { Preview } from './components/preview';

// Content components
export { Container } from './components/container';
export { Section } from './components/section';
export { Row } from './components/row';
export { Column } from './components/column';
export { Heading } from './components/heading';
export { Text } from './components/text';
export { Link } from './components/link';
export { Button } from './components/button';
export { Image } from './components/image';
export { Hr } from './components/hr';
export { Img } from './components/img';
export { Markdown } from './components/markdown';
export { CodeBlock } from './components/code-block';
export { CodeInline } from './components/code-inline';

// Type exports
export type { RenderOptions } from './render';
export type { HtmlProps } from './components/html';
export type { HeadProps } from './components/head';
export type { BodyProps } from './components/body';
export type { PreviewProps } from './components/preview';
export type { ContainerProps } from './components/container';
export type { SectionProps } from './components/section';
export type { RowProps } from './components/row';
export type { ColumnProps } from './components/column';
export type { HeadingProps } from './components/heading';
export type { TextProps } from './components/text';
export type { LinkProps } from './components/link';
export type { ButtonProps } from './components/button';
// Note: ImageProps and ImgProps both exist — Image is an alias for Img with
// a more descriptive name. Prefer Img for standard usage per HTML conventions.
export type { ImageProps } from './components/image';
export type { HrProps } from './components/hr';
export type { ImgProps } from './components/img';
export type { MarkdownProps } from './components/markdown';
export type { CodeBlockProps } from './components/code-block';
export type { CodeInlineProps } from './components/code-inline';

// TODO: The Image/Img duplication is a bit confusing. Consider deprecating
// Image in a future version and standardising on Img to match HTML semantics.
