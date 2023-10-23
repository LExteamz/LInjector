-- I'm not sure who made this but I certainly did not make this
-- Fixed and working once again by depso
local Props = {};
local tostring = tostring;
local Players = game:GetService('Players');
local Beat = game:GetService('RunService').Heartbeat;

local SaveList = {
  game:GetService('Workspace'), 
  game:GetService('ReplicatedFirst'),
  game:GetService('ReplicatedStorage'),
  game:GetService('Lighting'), 
  game:GetService('StarterGui'), 
  game:GetService('StarterPack'),
  game:GetService('StarterPlayer'), 
  game:GetService('Teams') -- game:GetService('InsertService');
};

local IgnoredList = {
  'CameraScript', 
  'ControlScript', 
  'ChatScript', 
  'BubbleChat', 
  'Camera'
}

local NoNoProp = {
    Instance = {
        Archivable = true,
        DataCost = true,
        ClassName = true,
        RobloxLocked = true,
        Parent = true
    },
    BasePart = {
        Position = true,
        Rotation = true
    }
};

local Classes = game:HttpGet('https://anaminus.github.io/rbx/json/api/latest.json', true)
Classes = game:GetService('HttpService'):JSONDecode(Classes);

local Me = Players.LocalPlayer;

for _, Player in next, Players:GetPlayers() do
    if (Player ~= Me) then
        table.insert(IgnoredList, tostring(Player));
    end
end

local NumIg = #IgnoredList;

for Idx = 1, NumIg do
    IgnoredList[IgnoredList[Idx]] = true;
    IgnoredList[Idx] = nil;
end

function InNil()
    return getnilinstances();
end
function WritesFl(Location, Data)
    return writefile(Location, Data);
end
function Decompile(Script)
    return "LInjector cannot decompile scripts - depso" -- decompile(Script);
end
warn = warn;

local Temp = {};

for Idx, Val in next, Classes do
    if (Val.type == 'Class') then
        Temp[Val.Name] = Val;
        Temp[Val.Name].Properties = {};
    elseif (Val.type == 'Property') then
        local Ignore;

        --[[for _, Tag in next, Val.tags do
  if (Tag == 'deprecated') or (Tag == 'readonly') then
  	Ignore	= true;

  	break;
  end;
 	end;]]

        if (not Ignore) then
            local Ignored = false --	= NoNoProp[Val.Class];

            if Ignored and Ignored[Val.Name] then
                Ignore = true;
            end

            if (not Ignore) then
                local Props = Temp[Val.Class].Properties;

                Props[#Props + 1] = Val;
            end
        end
    end
end

Classes = Temp;

local function PropsOf(Obj)
    if Props[Obj.ClassName] then
        return Props[Obj.ClassName];
    end

    local Prop = {};
    local Class = Obj.ClassName;

    while Class do
        local Curr = Classes[Class];

        for Index, Value in next, Curr.Properties do
            Prop[#Prop + 1] = Value;
        end

        Class = Curr.Superclass;
    end

    table.sort(Prop, function(A, B)
        return A.Name < B.Name;
    end);

    Props[Obj.ClassName] = Prop;

    return Prop;
end

local function SetParent(Obj, Parent)
    local Cloned;

    if Obj.Archivable then
        Cloned = Obj:Clone();
    end

    if (not Cloned) then
        local pcall = pcall;

        Cloned = Instance.new 'Folder'

        for Index, Child in next, Obj:GetChildren() do
            pcall(SetParent, Child, Cloned);
        end

        Cloned.Name = Obj.Name .. ':' .. Obj.ClassName;
    end

    Cloned.Parent = Parent;
end

local function SavePlaceAsync()
    local Count = 0;
    local Final = {};
    local Timer = tick();
    local Saved = setmetatable({}, {
        __index = function(This, Idx)
            local C = Count + 1;
            Count = C;
            This[Idx] = C;
            return C;
        end
    });

    local pcall = pcall; -- Skid syndrome

    Final[1] =
        '<roblox xmlns:xmime="http://www.w3.org/2005/05/xmlmime" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.roblox.com/roblox.xsd" version="4"><External>null</External><External>nil</External>';
    warn('Saving place...');

    local function SaveInstance(Obj)
        if Classes[Obj.ClassName] and (not IgnoredList[Obj.Name]) then
            local Props = PropsOf(Obj);
            local Num = Saved[Obj];
            local Conversions = {
                ['&'] = '&amp;',
                ['<'] = '&lt;',
                ['>'] = '&gt;'
            }

            Final[#Final + 1] = '<Item class="' .. Obj.ClassName .. '" referent="RBX' .. Num .. '"><Properties>';

            if ((Num % 1080) == 0) then
                Beat:wait();
            end

            for _, Prop in next, Props do
                local Append;
                local Type = Prop.ValueType;
                Type = Type:gsub("int64", "int")
                local ObjProp = Prop.Name;
                local Objp_ok, Objp = pcall(function()
                    return Obj[ObjProp]
                end);
                if not Objp_ok then
                    Append = '';
                elseif (typeof(Objp) == 'EnumItem') then
                    Append = '<token name="' .. ObjProp .. '">' .. Objp.Value .. '</token>';
                else
                    if (Type == 'bool') then
                        Append = '<bool name="' .. ObjProp .. '">' .. tostring(Objp) .. '</bool>';
                    elseif (Type == 'float') then
                        Append = '<float name="' .. ObjProp .. '">' .. tostring(Objp) .. '</float>';
                    elseif (Type == 'int') then
                        Append = '<int name="' .. ObjProp .. '">' .. tostring(Objp) .. '</int>';
                    elseif (Type == 'double') then
                        Append = '<float name="' .. ObjProp .. '">' .. tostring(Objp) .. '</float>';
                    elseif (Type == 'string') then
                        local String = Objp:gsub("[&<>]", Conversions); -- Because I got C O M P L A I N T S

                        Append = '<string name="' .. ObjProp .. '">' .. String .. '</string>';
                    elseif (Type == 'BrickColor') then
                        Append = '<int name="' .. ObjProp .. '">' .. Objp.Number .. '</int>';
                    elseif (Type == 'Vector2') then
                        Append = '<Vector2 name="' .. ObjProp .. '">' .. '<X>' .. Objp.x .. '</X>' .. '<Y>' .. Objp.y ..
                                     '</Y>' .. '</Vector2>'
                    elseif (Type == 'Vector3') then
                        Append = '<Vector3 name="' .. ObjProp .. '">' .. '<X>' .. Objp.x .. '</X>' .. '<Y>' .. Objp.y ..
                                     '</Y>' .. '<Z>' .. Objp.z .. '</Z>' .. '</Vector3>'
                        if ObjProp == "Size" then
                            --[[Append ..= '\n<Vector3 name="InitialSize">'
   .. '<X>' .. Objp.x .. '</X>'
   .. '<Y>' .. Objp.y .. '</Y>'
   .. '<Z>' .. Objp.z .. '</Z>'
   .. '</Vector3>']]
                            Append = Append .. [[
    <Vector3 name="InitialSize">
    	<X>999</X>
    	<Y>999</Y>
    	<Z>999</Z>
    </Vector3>'
   	]]
                        end
                    elseif (Type == 'CoordinateFrame') then
                        local X, Y, Z, R00, R01, R02, R10, R11, R12, R20, R21, R22 = Objp:components()

                        Append = '<CoordinateFrame name="' .. ObjProp .. '">' .. '<X>' .. X .. '</X>' .. '<Y>' .. Y ..
                                     '</Y>' .. '<Z>' .. Z .. '</Z>' .. '<R00>' .. R00 .. '</R00>' .. '<R01>' .. R01 ..
                                     '</R01>' .. '<R02>' .. R02 .. '</R02>' .. '<R10>' .. R10 .. '</R10>' .. '<R11>' ..
                                     R11 .. '</R11>' .. '<R12>' .. R12 .. '</R12>' .. '<R20>' .. R20 .. '</R20>' ..
                                     '<R21>' .. R21 .. '</R21>' .. '<R22>' .. R22 .. '</R22>' .. '</CoordinateFrame>'
                    elseif (Type == 'Content') then
                        local String = Objp:gsub("[&<>]", Conversions);

                        Append = '<Content name="' .. ObjProp .. '"><url>' .. String .. '</url></Content>';
                    elseif (Type == 'UDim2') then
                        local Objp = Objp;

                        Append = '<UDim2 name="' .. ObjProp .. '">' .. '<XS>' .. Objp.X.Scale .. '</XS>' .. '<XO>' ..
                                     Objp.X.Offset .. '</XO>' .. '<YS>' .. Objp.Y.Scale .. '</YS>' .. '<YO>' ..
                                     Objp.Y.Offset .. '</YO>' .. '</UDim2>'
                    elseif (Type == 'Color3') then
                        Append = '<Color3 name="' .. ObjProp .. '">' .. '<R>' .. Objp.r .. '</R>' .. '<G>' .. Objp.g ..
                                     '</G>' .. '<B>' .. Objp.b .. '</B>' .. '</Color3>'
                    elseif (Type == 'NumberRange') then
                        Append = '<NumberRange name="' .. ObjProp .. '">' .. tostring(Objp.Min) .. ' ' ..
                                     tostring(Objp.Max) .. '</NumberRange>'
                    elseif (Type == 'NumberSequence') then
                        local Ob = {};

                        Ob[1] = '<NumberSequence name="' .. ObjProp .. '">'

                        for i, v in next, Objp.Keypoints do
                            Ob[#Ob + 1] = tostring(v.Time) .. ' ' .. tostring(v.Value) .. ' ' .. tostring(v.Envelope) ..
                                              ' ';
                        end

                        Ob[#Ob + 1] = '</NumberSequence>';

                        Append = table.concat(Ob);
                    elseif (Type == 'ColorSequence') then
                        local Ob = {};

                        Ob[1] = '<ColorSequence name="' .. ObjProp .. '">'

                        for i, v in next, Objp.Keypoints do
                            Ob[#Ob + 1] = table.concat {tostring(v.Time) .. ' ' .. tostring(v.Value.r) .. ' ' ..
                                tostring(v.Value.g) .. ' ' .. tostring(v.Value.b), " 0 "};
                        end

                        Ob[#Ob + 1] = '</ColorSequence>';

                        Append = table.concat(Ob);
                    elseif (Type == 'Rect2D') then
                        Append = '<Rect2D name="' .. ObjProp .. '">' .. '<min>' .. '<X>' .. tostring(Objp.Min.X) ..
                                     '</X>' .. '<Y>' .. tostring(Objp.Min.Y) .. '</Y>' .. '</min>' .. '<max>' .. '<X>' ..
                                     tostring(Objp.Max.X) .. '</X>' .. '<Y>' .. tostring(Objp.Max.Y) .. '</Y>' ..
                                     '</max>' .. '</Rect2D>'
                    elseif (Type == 'ProtectedString') then
                        local Src = "--shout out to depso";

                        if (Obj.ClassName ~= 'Script') then
                            local Sc, Er = Decompile(Obj);

                            if (not Sc) then
                                Src = '--[[\n\t' .. Er .. '\n--]]';
                            else
                                Src = Sc;
                            end
                        end

                        Append = '<ProtectedString name="' .. ObjProp .. '"><![CDATA[' .. Src .. ']]></ProtectedString>';
                    elseif (Type == 'Object') then
                        if (not Objp) then
                            Objp = 'null';
                        else
                            Objp = 'RBX' .. Saved[Objp];
                        end

                        Append = '<Ref name="' .. ObjProp .. '">' .. Objp .. '</Ref>';
                    elseif (Type == 'PhysicalProperties') then
                        if Objp then
                            Append =
                                '<PhysicalProperties name="' .. ObjProp .. '"><CustomPhysics>true</CustomPhysics>' ..
                                    '<Density>' .. tostring(Objp.Density) .. '</Density>' .. '<Friction>' ..
                                    tostring(Objp.Friction) .. '</Friction>' .. '<Elasticity>' ..
                                    tostring(Objp.Elasticity) .. '</Elasticity>' .. '<FrictionWeight>' ..
                                    tostring(Objp.FrictionWeight) .. '</FrictionWeight>' .. '<ElasticityWeight>' ..
                                    tostring(Objp.ElasticityWeight) .. '</ElasticityWeight>' .. '</PhysicalProperties>'
                        else
                            Append = '<PhysicalProperties name="' .. ObjProp ..
                                         '"><CustomPhysics>false</CustomPhysics></PhysicalProperties>';
                        end
                    end
                end

                if Append then
                    Final[#Final + 1] = Append;
                end
            end

            Final[#Final + 1] = '</Properties>';

            for _, Obj in next, Obj:GetChildren() do
                SaveInstance(Obj);
            end

            Final[#Final + 1] = '</Item>';
        end
    end

    do
        local Other = Instance.new 'Folder';

        local Real = Players.LocalPlayer;
        local Play = Instance.new 'Folder';

        Other.Name = 'LINJECTOR OTHER OBJECTS';
        Other.RobloxLocked = true;
        Other.Parent = game;

        Play.Parent = Other;
        Play.Name = 'LocalPlayer';

        for _, Des in next, Real:GetChildren() do
            pcall(SetParent, Des, Play);
        end

        if InNil then
            local Extr = Instance.new 'Folder';

            Extr.Parent = Other;
            Extr.Name = 'Nil_Instances';

            for _, Nil in next, InNil() do
                pcall(SetParent, Nil, Extr);
            end
        end

        SaveList[#SaveList + 1] = Other;
    end

    for _, Child in next, SaveList do
        SaveInstance(Child);
    end

    Final[#Final + 1] = '</roblox>';

    local Place = game:GetService('MarketplaceService'):GetProductInfo(game.PlaceId);

    if Place.Name then
        local Illegal = {'/', '\\', ':', '?', '"', '\'', '<', '>', '|'};

        for Idx = 1, #Illegal do
            Illegal[Illegal[Idx]] = '';

            Illegal[Idx] = nil;
        end

        Place = string.gsub(Place.Name, '.', Illegal);
    else
        Place = 'Unknown';
    end

    wait(1)
    Final = table.concat(Final);

    warn(string.format('Done serializing, saving (%d bytes)', #Final));

    print(Place .. '.rbxl')

    WritesFl(Place .. '.rbxl', Final);

    warn(string.format('Saving took %d second(s), please check your workspace folder', tick() - Timer));
end

getgenv().saveinstance = SavePlaceAsync
