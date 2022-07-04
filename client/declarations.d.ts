// We need to tell TypeScript that when we write "import styles from './styles.scss' we mean to load a module (to look for a './styles.scss.d.ts').
declare module '*.module.css';
declare module '*.module.scss';
declare module '*.graphql';
declare module '*.scss';
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}