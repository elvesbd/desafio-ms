export interface MessageBroker {
  publish(topic: string, payload: object): Promise<void>;
}
