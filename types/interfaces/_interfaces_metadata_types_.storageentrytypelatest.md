[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/metadata/types"](../modules/_interfaces_metadata_types_.md) › [StorageEntryTypeLatest](_interfaces_metadata_types_.storageentrytypelatest.md)

# Interface: StorageEntryTypeLatest

StorageEntryTypeV10

## Hierarchy

  ↳ [StorageEntryTypeV10](_interfaces_metadata_types_.storageentrytypev10.md)

  ↳ **StorageEntryTypeLatest**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_metadata_types_.storageentrytypelatest.md#constructor)

### Properties

* [asDoubleMap](_interfaces_metadata_types_.storageentrytypelatest.md#asdoublemap)
* [asMap](_interfaces_metadata_types_.storageentrytypelatest.md#asmap)
* [asPlain](_interfaces_metadata_types_.storageentrytypelatest.md#asplain)
* [isDoubleMap](_interfaces_metadata_types_.storageentrytypelatest.md#isdoublemap)
* [isMap](_interfaces_metadata_types_.storageentrytypelatest.md#ismap)
* [isPlain](_interfaces_metadata_types_.storageentrytypelatest.md#isplain)
* [registry](_interfaces_metadata_types_.storageentrytypelatest.md#registry)

### Accessors

* [encodedLength](_interfaces_metadata_types_.storageentrytypelatest.md#encodedlength)
* [hash](_interfaces_metadata_types_.storageentrytypelatest.md#hash)
* [index](_interfaces_metadata_types_.storageentrytypelatest.md#index)
* [isEmpty](_interfaces_metadata_types_.storageentrytypelatest.md#isempty)
* [isNone](_interfaces_metadata_types_.storageentrytypelatest.md#isnone)
* [isNull](_interfaces_metadata_types_.storageentrytypelatest.md#isnull)
* [type](_interfaces_metadata_types_.storageentrytypelatest.md#type)
* [value](_interfaces_metadata_types_.storageentrytypelatest.md#value)

### Methods

* [eq](_interfaces_metadata_types_.storageentrytypelatest.md#eq)
* [toHex](_interfaces_metadata_types_.storageentrytypelatest.md#tohex)
* [toJSON](_interfaces_metadata_types_.storageentrytypelatest.md#tojson)
* [toNumber](_interfaces_metadata_types_.storageentrytypelatest.md#tonumber)
* [toRawType](_interfaces_metadata_types_.storageentrytypelatest.md#torawtype)
* [toString](_interfaces_metadata_types_.storageentrytypelatest.md#tostring)
* [toU8a](_interfaces_metadata_types_.storageentrytypelatest.md#tou8a)
* [with](_interfaces_metadata_types_.storageentrytypelatest.md#static-with)

## Constructors

###  constructor

\+ **new StorageEntryTypeLatest**(`registry`: [Registry](_types_.registry.md), `def`: Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) | [Constructor](_types_.constructor.md)› | string[], `value?`: any, `index?`: undefined | number): *[StorageEntryTypeLatest](_interfaces_metadata_types_.storageentrytypelatest.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[constructor](../classes/_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/codec/Enum.ts:110](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Enum.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`def` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](_types_.constructor.md)› &#124; string[] |
`value?` | any |
`index?` | undefined &#124; number |

**Returns:** *[StorageEntryTypeLatest](_interfaces_metadata_types_.storageentrytypelatest.md)*

## Properties

###  asDoubleMap

• **asDoubleMap**: *[DoubleMapTypeV10](_interfaces_metadata_types_.doublemaptypev10.md)*

*Inherited from [StorageEntryTypeV10](_interfaces_metadata_types_.storageentrytypev10.md).[asDoubleMap](_interfaces_metadata_types_.storageentrytypev10.md#asdoublemap)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:720](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/interfaces/metadata/types.ts#L720)*

DoubleMapTypeV10

___

###  asMap

• **asMap**: *[MapTypeV10](_interfaces_metadata_types_.maptypev10.md)*

*Inherited from [StorageEntryTypeV10](_interfaces_metadata_types_.storageentrytypev10.md).[asMap](_interfaces_metadata_types_.storageentrytypev10.md#asmap)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:716](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/interfaces/metadata/types.ts#L716)*

MapTypeV10

___

###  asPlain

• **asPlain**: *[PlainTypeV10](_interfaces_metadata_types_.plaintypev10.md)*

*Inherited from [StorageEntryTypeV10](_interfaces_metadata_types_.storageentrytypev10.md).[asPlain](_interfaces_metadata_types_.storageentrytypev10.md#asplain)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:712](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/interfaces/metadata/types.ts#L712)*

PlainTypeV10

___

###  isDoubleMap

• **isDoubleMap**: *boolean*

*Inherited from [StorageEntryTypeV10](_interfaces_metadata_types_.storageentrytypev10.md).[isDoubleMap](_interfaces_metadata_types_.storageentrytypev10.md#isdoublemap)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:718](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/interfaces/metadata/types.ts#L718)*

2:: DoubleMap(DoubleMapTypeV10)

___

###  isMap

• **isMap**: *boolean*

*Inherited from [StorageEntryTypeV10](_interfaces_metadata_types_.storageentrytypev10.md).[isMap](_interfaces_metadata_types_.storageentrytypev10.md#ismap)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:714](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/interfaces/metadata/types.ts#L714)*

1:: Map(MapTypeV10)

___

###  isPlain

• **isPlain**: *boolean*

*Inherited from [StorageEntryTypeV10](_interfaces_metadata_types_.storageentrytypev10.md).[isPlain](_interfaces_metadata_types_.storageentrytypev10.md#isplain)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:710](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/interfaces/metadata/types.ts#L710)*

0:: Plain(PlainTypeV10)

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[registry](../classes/_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[encodedLength](../classes/_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Enum.ts:173](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Enum.ts#L173)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[index](../classes/_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:180](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Enum.ts#L180)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNone](../classes/_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/codec/Enum.ts:187](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Enum.ts#L187)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNull](../classes/_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:194](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Enum.ts#L194)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[type](../classes/_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/codec/Enum.ts:201](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Enum.ts#L201)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[value](../classes/_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:208](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Enum.ts#L208)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[eq](../classes/_codec_enum_.enum.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:215](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Enum.ts#L215)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toHex](../classes/_codec_enum_.enum.md#tohex)*

*Overrides [Base](../classes/_codec_base_.base.md).[toHex](../classes/_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Enum.ts:238](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Enum.ts#L238)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toJSON](../classes/_codec_enum_.enum.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Enum.ts:245](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Enum.ts#L245)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toNumber](../classes/_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:254](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Enum.ts#L254)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toRawType](../classes/_codec_enum_.enum.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Enum.ts:270](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Enum.ts#L270)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toString](../classes/_codec_enum_.enum.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:277](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Enum.ts#L277)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toU8a](../classes/_codec_enum_.enum.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/codec/Enum.ts:287](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Enum.ts#L287)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`Types`: Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) | [Constructor](_types_.constructor.md)› | string[]): *[EnumConstructor](_codec_enum_.enumconstructor.md)‹[Enum](../classes/_codec_enum_.enum.md)›*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[with](../classes/_codec_enum_.enum.md#static-with)*

*Defined in [packages/types/src/codec/Enum.ts:137](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/Enum.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](_types_.constructor.md)› &#124; string[] |

**Returns:** *[EnumConstructor](_codec_enum_.enumconstructor.md)‹[Enum](../classes/_codec_enum_.enum.md)›*