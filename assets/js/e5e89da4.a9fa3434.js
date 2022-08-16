"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[431],{84160:e=>{e.exports=JSON.parse('{"functions":[{"name":"_start","desc":"Starts the internal processes for ClientBridge.","params":[{"name":"config","desc":"","lua_type":"dictionary"}],"returns":[],"function_type":"static","ignore":true,"source":{"line":39,"path":"src/ClientBridge.lua"}},{"name":"Fire","desc":"The equivalent of :FireServer().\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\n\\nBridge:Fire(\\"Hello\\", \\"world!\\")\\n```","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":188,"path":"src/ClientBridge.lua"}},{"name":"InvokeServerAsync","desc":"Invokes the server for a response. Promise wrapper over :InvokeServerAsync()\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\n\\nlocal data = Bridge:InvokeServerAsync(\\"whats 2+2?\\")\\nprint(data) -- prints \\"4\\"\\n```","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"...any"}],"function_type":"method","source":{"line":212,"path":"src/ClientBridge.lua"}},{"name":"InvokeServer","desc":"Invokes the server for a response. Promise wrapper over :InvokeServerAsync()\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\n\\nlocal data = Bridge:InvokeServer(\\"this text will be returned but with something added at the end!\\"):andThen(function(string)\\n\\tprint(string) -- Prints \\"this text will be returned but with something added at the end!something\\"\\nend)\\n```","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"method","source":{"line":251,"path":"src/ClientBridge.lua"}},{"name":"Connect","desc":"Creates a connection. Can be disconnected using :Disconnect().\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\n\\nBridge:Connect(function(text)\\n\\tprint(text)\\nend)\\n```","params":[{"name":"func","desc":"","lua_type":"function"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":272,"path":"src/ClientBridge.lua"}},{"name":"Destroy","desc":"Destroys the ClientBridge object. Doesn\'t destroy the RemoteEvent, or destroy the identifier. It doesn\'t send anything to the server. Just destroys the client sided object.\\n\\n```lua\\nlocal Bridge = ClientBridge.new(\\"Remote\\")\\n\\nClientBridge:Destroy()\\n\\nClientBridge:Fire() -- Errors\\n```","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":351,"path":"src/ClientBridge.lua"}}],"properties":[],"types":[],"name":"ClientBridge","desc":"Client-sided object for handling networking. Since it\'s on the client, all it really handles is queueing.","source":{"line":30,"path":"src/ClientBridge.lua"}}')}}]);