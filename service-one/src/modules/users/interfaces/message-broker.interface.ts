export interface MessageBroker {
  publishToTopic(topic: string, payload: object): Promise<void>;
}
