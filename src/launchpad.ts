export enum LaunchpadStatus {
  'launching' = 'launching',
  'cloning' = 'cloning',
  'initializing' = 'initializing',
  'deploying' = 'deploying',
  'completed' = 'completed',
  'failed' = 'failed',
}

export interface LaunchpadDTO {
  id: string;
  source_url: string;
  domain: string;
  status: LaunchpadStatus;
  date_created: string;
  links: {
    status: string;
  };
}

export type PubsubMessageAttributes = {
  action: string;
  id: string;
  user_auth: string;
  [key: string]: string;
};

export type LaunchpadMessageAttributes = PubsubMessageAttributes & {
  action: 'launchpad';
  source_url: string;
  domain: string;
};
