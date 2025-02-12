declare class ClientObject<T extends Array<unknown>> {
	Fire: (...arguments: T) => void;
	Connection: (callback: (...arguments: T) => never) => void;
	InvokeServerAsync: (...arguments: Array<unknown>) => Array<unknown>
}

declare namespace ClientBridge {
	export type CreateBridge = <T extends Array<unknown>>(name: string) => ClientObject<T>
}

export = ClientBridge