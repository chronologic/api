[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/metadata/types"](../modules/_interfaces_metadata_types_.md) › [MapTypeV8](_interfaces_metadata_types_.maptypev8.md)

# Interface: MapTypeV8 <**S, T, V, E**>

MapTypeV7

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [MapTypeV7](_interfaces_metadata_types_.maptypev7.md)

  ↳ **MapTypeV8**

  ↳ [MapTypeV9](_interfaces_metadata_types_.maptypev9.md)

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_metadata_types_.maptypev8.md#constructor)

### Properties

* [[Symbol.toStringTag]](_interfaces_metadata_types_.maptypev8.md#[symbol.tostringtag])
* [hasher](_interfaces_metadata_types_.maptypev8.md#hasher)
* [key](_interfaces_metadata_types_.maptypev8.md#key)
* [linked](_interfaces_metadata_types_.maptypev8.md#linked)
* [registry](_interfaces_metadata_types_.maptypev8.md#registry)
* [value](_interfaces_metadata_types_.maptypev8.md#value)

### Accessors

* [Type](_interfaces_metadata_types_.maptypev8.md#type)
* [encodedLength](_interfaces_metadata_types_.maptypev8.md#encodedlength)
* [hash](_interfaces_metadata_types_.maptypev8.md#hash)
* [isEmpty](_interfaces_metadata_types_.maptypev8.md#isempty)

### Methods

* [[Symbol.iterator]](_interfaces_metadata_types_.maptypev8.md#[symbol.iterator])
* [eq](_interfaces_metadata_types_.maptypev8.md#eq)
* [get](_interfaces_metadata_types_.maptypev8.md#get)
* [getAtIndex](_interfaces_metadata_types_.maptypev8.md#getatindex)
* [toArray](_interfaces_metadata_types_.maptypev8.md#toarray)
* [toHex](_interfaces_metadata_types_.maptypev8.md#tohex)
* [toJSON](_interfaces_metadata_types_.maptypev8.md#tojson)
* [toRawType](_interfaces_metadata_types_.maptypev8.md#torawtype)
* [toString](_interfaces_metadata_types_.maptypev8.md#tostring)
* [toU8a](_interfaces_metadata_types_.maptypev8.md#tou8a)
* [typesToMap](_interfaces_metadata_types_.maptypev8.md#static-typestomap)
* [with](_interfaces_metadata_types_.maptypev8.md#static-with)

## Constructors

###  constructor

\+ **new MapTypeV8**(`registry`: [Registry](_types_.registry.md), `Types`: S, `value`: V | Map‹any, any› | any[] | string, `jsonMap`: Map‹keyof S, string›): *[MapTypeV8](_interfaces_metadata_types_.maptypev8.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/codec/Struct.ts:38](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L38)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`Types` | S | - |
`value` | V &#124; Map‹any, any› &#124; any[] &#124; string |  {} as V |
`jsonMap` | Map‹keyof S, string› |  new Map() |

**Returns:** *[MapTypeV8](_interfaces_metadata_types_.maptypev8.md)*

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  hasher

• **hasher**: *[StorageHasherV4](../classes/_primitive_storagehasher_.storagehasherv4.md)*

*Inherited from [MapTypeV4](_interfaces_metadata_types_.maptypev4.md).[hasher](_interfaces_metadata_types_.maptypev4.md#hasher)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:305](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/interfaces/metadata/types.ts#L305)*

StorageHasherV4

___

###  key

• **key**: *[Type](../classes/_primitive_type_.type.md)*

*Inherited from [MapTypeV4](_interfaces_metadata_types_.maptypev4.md).[key](_interfaces_metadata_types_.maptypev4.md#key)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:307](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/interfaces/metadata/types.ts#L307)*

Type

___

###  linked

• **linked**: *[bool](_interfaceregistry_.interfaceregistry.md#bool)*

*Inherited from [MapTypeV4](_interfaces_metadata_types_.maptypev4.md).[linked](_interfaces_metadata_types_.maptypev4.md#linked)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:311](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/interfaces/metadata/types.ts#L311)*

bool

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[registry](../classes/_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L34)*

___

###  value

• **value**: *[Type](../classes/_primitive_type_.type.md)*

*Inherited from [MapTypeV4](_interfaces_metadata_types_.maptypev4.md).[value](_interfaces_metadata_types_.maptypev4.md#value)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:309](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/interfaces/metadata/types.ts#L309)*

Type

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[keyof S, [Codec](_types_.codec.md)]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[keyof S, [Codec](_types_.codec.md)]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L189)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](_types_.codec.md) | undefined*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[get](../classes/_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L197)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](_types_.codec.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[getAtIndex](../classes/_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](_types_.registry.md), `Types`: Record‹string, [Constructor](_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[typesToMap](../classes/_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`Types` | Record‹string, [Constructor](_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*