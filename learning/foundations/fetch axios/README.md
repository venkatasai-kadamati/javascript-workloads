## Fetch API

It's an inbuilt function that helps make calls to servers.

## Idea

The core initution is we write a call with all required details like body, query/path param and such and wait for response.

## Working

Fetch works in 2 phases, because network calls are blocking in major cases.

1. fetch() - results in a promise, and this promise is resolved only when status and headers are ready.
2. res.json() - second phase is getting the body

## Note:

on network wires, the format is always plain text (string) translated into bytes/streams/packets. There is no concept of objects.
Objects just exist within a program.
Thus: We manually convert the body using JSON.stringify()

## Important

Serialization/ Deserialization happen at both ends (server/client)

```
JSON.stringify(obj): object → JSON string (called serializing)
JSON.parse(str): JSON string → object (called deserializing)
```
