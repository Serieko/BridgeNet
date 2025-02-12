type config = {
	Middleware: { (...unknown): unknown },
	ReplicationRate: number,
}

type Bridge = (ReplicationRate: number, Middleware: { (...any): unknown }) => config

export = Bridge