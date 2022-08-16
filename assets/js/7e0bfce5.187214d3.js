"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[821],{73257:e=>{e.exports=JSON.parse('{"functions":[{"name":"_start","desc":"Starts the internal processes for ServerBridge.","params":[{"name":"config","desc":"","lua_type":"dictionary"}],"returns":[{"desc":"","lua_type":"nil\\r\\n"}],"function_type":"static","ignore":true,"source":{"line":49,"path":"src/ServerBridge.lua"}},{"name":"FireTo","desc":"Sends data to a specific player.\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\nBridge:FireTo(Players.Someone, \\"Hello\\", \\"World!\\")\\n```","params":[{"name":"plr","desc":"","lua_type":"Player"},{"name":"...","desc":"","lua_type":"...any"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":290,"path":"src/ServerBridge.lua"}},{"name":"OnInvoke","desc":"Set the handler for when the server is invoked. By default, this is nil. The client will hang forever as of writing this right now.\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\n\\nlocal data = Bridge:OnInvoke(function(data)\\n\\tif data == \\"whats 2+2?\\" then\\n\\t\\treturn \\"4\\"\\n\\tend\\nend)\\n```","params":[{"name":"callback","desc":"","lua_type":"(...any) -> nil"}],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"method","source":{"line":316,"path":"src/ServerBridge.lua"}},{"name":"FireToAllExcept","desc":"Sends data to every player except for one.\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\nBridge:FireToAllExcept(Players.Someone, \\"Hello\\", \\"World!\\")\\nBridge:FireToAllExcept({Players.A, Players.B}, \\"Not to A or B, but to C.\\")\\n```","params":[{"name":"blacklistedPlrs","desc":"","lua_type":"Player | {Player}"},{"name":"...","desc":"","lua_type":"...any"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":345,"path":"src/ServerBridge.lua"}},{"name":"FireAllInRangeExcept","desc":"Sends data to every single player within the range except certain blacklisted players. Returns the players affected, for usage later.\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\nlocal PlayersSent = Bridge:FireToAllInRangeExcept(\\n\\tPlayers.Someone,\\n\\tVector3.new(50, 50, 50),\\n\\t10,\\n\\t\\"Hello\\",\\n\\t\\"World!\\"\\n)\\n\\ntask.wait(5)\\n\\nBridge:FireToMultiple(PlayersSent, \\"Time for an update!\\")\\n```","params":[{"name":"blacklistedPlrs","desc":"","lua_type":"Player | {Player}"},{"name":"point","desc":"","lua_type":"Vector3"},{"name":"range","desc":"","lua_type":"number"},{"name":"...","desc":"","lua_type":"...any"}],"returns":[{"desc":"","lua_type":"{Player}"}],"function_type":"method","source":{"line":394,"path":"src/ServerBridge.lua"}},{"name":"FireAllInRange","desc":"Sends data to every single player within the range. Returns the players affected, for usage later.\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\nlocal PlayersSent = Bridge:FireAllInRange(\\n\\tVector3.new(50, 50, 50),\\n\\t10,\\n\\t\\"Hello\\",\\n\\t\\"World!\\"\\n)\\n\\ntask.wait(5)\\n\\nBridge:FireToMultiple(PlayersSent, \\"Time for an update!\\")\\n```","params":[{"name":"point","desc":"","lua_type":"Vector3"},{"name":"range","desc":"","lua_type":"number"},{"name":"...","desc":"","lua_type":"...any"}],"returns":[{"desc":"","lua_type":"{Player}"}],"function_type":"method","source":{"line":448,"path":"src/ServerBridge.lua"}},{"name":"FireAll","desc":"Sends data to every single player, with no exceptions.\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\nBridge:FireAll(\\"Hello, world!\\")\\n```","params":[{"name":"...","desc":"","lua_type":"...any"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":477,"path":"src/ServerBridge.lua"}},{"name":"FireToMultiple","desc":"Sends data to multiple players.\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\nBridge:FireToMultiple({Players.A, Players.B}, \\"Hi!\\", \\"Hello.\\")\\n```","params":[{"name":"plrs","desc":"","lua_type":"{Player}"},{"name":"...","desc":"","lua_type":"...any"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":500,"path":"src/ServerBridge.lua"}},{"name":"Connect","desc":"Creates a connection.\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\nBridge:Connect(function(plr, data)\\n\\tprint(plr .. \\" has sent \\" .. data)\\nend)\\n```","params":[{"name":"func","desc":"","lua_type":"(plr: Player, ...any) -> nil"}],"returns":[{"desc":"","lua_type":"Connection"}],"function_type":"method","source":{"line":582,"path":"src/ServerBridge.lua"}},{"name":"Destroy","desc":"Destroys the identifier, and deletes the object reference.\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\nBridge:Destroy()\\n\\nBridge:FireTo(Players.A) -- Errors, the object is deleted.\\n```","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":634,"path":"src/ServerBridge.lua"}}],"properties":[],"types":[],"name":"ServerBridge","desc":"The general method of communicating from the server to the client.","source":{"line":40,"path":"src/ServerBridge.lua"}}')}}]);