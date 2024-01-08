 --[[
*
* ░▒█░░░░▀█▀░█▀▀▄░░░▀░█▀▀░█▀▄░▀█▀░▄▀▀▄░█▀▀▄░░░▒█▀▀▀░█░▒█░█▀▀▄░█▀▄░▀█▀░░▀░░▄▀▀▄░█▀▀▄░█▀▀░░
* ░▒█░░░░▒█░░█░▒█░░░█░█▀▀░█░░░░█░░█░░█░█▄▄▀░░░▒█▀▀░░█░▒█░█░▒█░█░░░░█░░░█▀░█░░█░█░▒█░▀▀▄░░
* ░▒█▄▄█░▄█▄░▀░░▀░█▄█░▀▀▀░▀▀▀░░▀░░░▀▀░░▀░▀▀░░░▒█░░░░░▀▀▀░▀░░▀░▀▀▀░░▀░░▀▀▀░░▀▀░░▀░░▀░▀▀▀░░
*
* Written By Depso
*
* ]]

local EXPLOIT_NAME = "LInjector"
local GITHUB_NAME = "LExteamz"
local EXPLOIT_VERSION = "08.01.2024"

--[[local genv = getgenv()
if genv[EXPLOIT_NAME] then
   return script:Remove()
end
genv[EXPLOIT_NAME] = true]]

--- Libraries
local HashIngLibrary = loadstring(game:HttpGet("https://raw.githubusercontent.com/zzerexx/scripts/main/HashLib.lua"))()
local disassemble = loadstring(game:HttpGet("https://raw.githubusercontent.com/TheSeaweedMonster/Luau/main/decompile.lua"))()
loadstring(game:HttpGet('https://raw.githubusercontent.com/'..GITHUB_NAME..'/LInjector/main/Redistributables/Lua%20Scripts/SaveInstance.lua'))()

local MarketplaceService=game.MarketplaceService
local localplayer=game:GetService'Players'.LocalPlayer
local StarterGui=game:GetService("StarterGui")
-------------

local hashlibalgs = {
   "sha1", "sha224"
}
local hashalgs = {
   "md5", "sha1", "sha224", "sha256", "sha384", "sha512", "sha3-256", "sha3-384", "sha3-512",
   "md2", "haval", "ripemd128", "ripemd160", "ripemd256", "ripemd320"
}
local ciphers = {
   ['aes-cbc'] = "CBC",
   ['aes-cfb'] = "CFB",
   ['aes-ctr'] = "CTR",
   ['aes-ofb'] = "OFB",
   ['aes-gcm'] = "GCM"
}


Export=function(name, value)
   getgenv()[name] = value
end
STDExport=function(text)
   writefile("LINJECTOR/LINJECTOR.li", text)
   wait()
end 

---------

setreadonly(crypt, false)

crypt.encrypt = function(cipher, data, key, nonce)
   cipher = cipher:lower()
   if cipher:find("eax") or cipher:find("bf") then
      return ""
   end
   return crypt.custom_encrypt(data, key, nonce, ciphers[cipher:gsub("_", "-")])
end
crypt.decrypt = function(cipher, data, key, nonce)
   cipher = cipher:lower()
   if cipher:find("eax") or cipher:find("bf") then
      return ""
   end
   return crypt.custom_decrypt(data, key, nonce, ciphers[cipher:gsub("_", "-")])
end
crypt.hash = function(alg, data)
   alg = alg:lower():gsub("_", "-")

   local HashLib = table.find(hashlibalgs, alg)
   local SwLib = table.find(hashalgs, alg)
   assert(HashLib or SwLib, "#1 Unknown hash algorithm")

   if HashLib then
      return hash[alg:gsub("-", "_")](data)
   end
   if SwLib then
      return crypt.hash(data, alg):lower()
   end
end
crypt.derive = function(_, len)
   return crypt.generatebytes(len)
end
crypt.random = crypt.generatebytes 
crypt.generatebytes = crypt.generatebytes

setreadonly(crypt, true)

local oldRequest
oldRequest = hookfunction(request, function(Arguments)
    local Headers = Arguments.Headers or {}
    Headers['User-Agent'] = EXPLOIT_NAME
    return oldRequest({
        Url = Arguments.Url,
        Method = Arguments.Method or "GET",
        Headers = Headers,
        Cookies = Arguments.Cookies or {},
        Body = Arguments.Body or ""
    })
end)


Export("identifyexecutor", function()
   return EXPLOIT_NAME, EXPLOIT_VERSION
end)
Export("getexecutorname", function()
   return EXPLOIT_NAME, EXPLOIT_VERSION
end)
Export("disassemble", disassemble)
Export("decompile", disassemble)

local Functions={
  "messagebox",
  "setDiscordRPC",
  "rconsoleprint",
  "rconsoleinfo",
  "rconsolename",
  "rconsolewarn",
  "rconsoleerr",
  "toclipboard",
  "rconsoleclose",
  "rconsoleshow",
  "rconsoleclear"
}

for _, name in next, Functions do
   Export(name,function(...)
      local String,Args = "|||", {...}
      for _, Arg in next, Args do
         String ..= " "..tostring(Arg)
      end
      STDExport(('%s%s'):format(name, String))
   end)
end
wait()

Export("setclipboard",toclipboard)
Export("set_clipboard",toclipboard)
Export("set_clipboard",toclipboard)
Export("Clipboard",{set=toclipboard})

pcall(spawn, function()
 repeat wait() until game:IsLoaded'' == true
 
  StarterGui:SetCore("ChatMakeSystemMessage",{
  	Text = "LInjector has successfully loaded!\nVersion: "..EXPLOIT_VERSION,
  	Color = Color3.fromRGB(230 , 0 , 255),
  	Font = Enum.Font.SourceSansBold,
  	FontSize = Enum.FontSize.Size18
  })
  rconsoleprint(([[Welcome %s! 
Successfully loaded at %s!]]):format(
      localplayer.DisplayName, 
      MarketplaceService:GetProductInfo(game.PlaceId).Name
  ))
 end)
 
 --[[
 *
 * ░▒█░░░░▀█▀░█▀▀▄░░░▀░█▀▀░█▀▄░▀█▀░▄▀▀▄░█▀▀▄░░░▒█▀▀▀░█░▒█░█▀▀▄░█▀▄░▀█▀░░▀░░▄▀▀▄░█▀▀▄░█▀▀░░
 * ░▒█░░░░▒█░░█░▒█░░░█░█▀▀░█░░░░█░░█░░█░█▄▄▀░░░▒█▀▀░░█░▒█░█░▒█░█░░░░█░░░█▀░█░░█░█░▒█░▀▀▄░░
 * ░▒█▄▄█░▄█▄░▀░░▀░█▄█░▀▀▀░▀▀▀░░▀░░░▀▀░░▀░▀▀░░░▒█░░░░░▀▀▀░▀░░▀░▀▀▀░░▀░░▀▀▀░░▀▀░░▀░░▀░▀▀▀░░
 *
 * Created by Depso

 if linjector then
   script:Remove()
   return 
end
getgenv()["linjector"] = true
loadstring(game:HttpGet("https://raw.githubusercontent.com/ItzzExcel/LInjector/master/Redistributables/Lua%20Scripts/Init.lua"))()]]
