interface ProcessOutput {
  readonly exitCode: number;
  readonly stdout: string;
  readonly stderr: string;
  toString(): string;
}

interface $ {
  (pieces: TemplateStringsArray, ...args: string[]): Promise<ProcessOutput>;
  verbose: boolean;
  shell: string;
  cwd: string;
  prefix: string;
  quote: (input: string) => string;
}

declare var $: $;

declare var cd: (path: string) => void;

declare var sleep: (ms: number) => Promise<void>;

type QuestionOptions = { choices: string[] };

declare var question: (
  query?: string,
  options?: QuestionOptions
) => Promise<string>;
