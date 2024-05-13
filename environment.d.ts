declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            PORT: string;
            KS_REPO_OWNER: string;
            KS_REPO_SKUG: string;
        }
    }
}