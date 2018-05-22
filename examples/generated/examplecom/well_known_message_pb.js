/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_api_pb = require('google-protobuf/google/protobuf/api_pb.js');
var google_protobuf_compiler_plugin_pb = require('google-protobuf/google/protobuf/compiler/plugin_pb.js');
var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_source_context_pb = require('google-protobuf/google/protobuf/source_context_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_type_pb = require('google-protobuf/google/protobuf/type_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.exportSymbol('proto.examplecom.WellKnownMessage', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.examplecom.WellKnownMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.examplecom.WellKnownMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.examplecom.WellKnownMessage.displayName = 'proto.examplecom.WellKnownMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.examplecom.WellKnownMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.examplecom.WellKnownMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.examplecom.WellKnownMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.WellKnownMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    myCodeGeneratorRequest: (f = msg.getMyCodeGeneratorRequest()) && google_protobuf_compiler_plugin_pb.CodeGeneratorRequest.toObject(includeInstance, f),
    myAny: (f = msg.getMyAny()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    myMethod: (f = msg.getMyMethod()) && google_protobuf_api_pb.Method.toObject(includeInstance, f),
    myGeneratedCodeInfo: (f = msg.getMyGeneratedCodeInfo()) && google_protobuf_descriptor_pb.GeneratedCodeInfo.toObject(includeInstance, f),
    myDuration: (f = msg.getMyDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    myEmpty: (f = msg.getMyEmpty()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f),
    myFieldMask: (f = msg.getMyFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    mySourceContext: (f = msg.getMySourceContext()) && google_protobuf_source_context_pb.SourceContext.toObject(includeInstance, f),
    myStruct: (f = msg.getMyStruct()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    myTimestamp: (f = msg.getMyTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    myType: (f = msg.getMyType()) && google_protobuf_type_pb.Type.toObject(includeInstance, f),
    myDoubleValue: (f = msg.getMyDoubleValue()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.examplecom.WellKnownMessage}
 */
proto.examplecom.WellKnownMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.examplecom.WellKnownMessage;
  return proto.examplecom.WellKnownMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.examplecom.WellKnownMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.examplecom.WellKnownMessage}
 */
proto.examplecom.WellKnownMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_compiler_plugin_pb.CodeGeneratorRequest;
      reader.readMessage(value,google_protobuf_compiler_plugin_pb.CodeGeneratorRequest.deserializeBinaryFromReader);
      msg.setMyCodeGeneratorRequest(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setMyAny(value);
      break;
    case 3:
      var value = new google_protobuf_api_pb.Method;
      reader.readMessage(value,google_protobuf_api_pb.Method.deserializeBinaryFromReader);
      msg.setMyMethod(value);
      break;
    case 4:
      var value = new google_protobuf_descriptor_pb.GeneratedCodeInfo;
      reader.readMessage(value,google_protobuf_descriptor_pb.GeneratedCodeInfo.deserializeBinaryFromReader);
      msg.setMyGeneratedCodeInfo(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMyDuration(value);
      break;
    case 6:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setMyEmpty(value);
      break;
    case 7:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMyFieldMask(value);
      break;
    case 8:
      var value = new google_protobuf_source_context_pb.SourceContext;
      reader.readMessage(value,google_protobuf_source_context_pb.SourceContext.deserializeBinaryFromReader);
      msg.setMySourceContext(value);
      break;
    case 9:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMyStruct(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setMyTimestamp(value);
      break;
    case 11:
      var value = new google_protobuf_type_pb.Type;
      reader.readMessage(value,google_protobuf_type_pb.Type.deserializeBinaryFromReader);
      msg.setMyType(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMyDoubleValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.examplecom.WellKnownMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.examplecom.WellKnownMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.examplecom.WellKnownMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.WellKnownMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMyCodeGeneratorRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_compiler_plugin_pb.CodeGeneratorRequest.serializeBinaryToWriter
    );
  }
  f = message.getMyAny();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getMyMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_api_pb.Method.serializeBinaryToWriter
    );
  }
  f = message.getMyGeneratedCodeInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_descriptor_pb.GeneratedCodeInfo.serializeBinaryToWriter
    );
  }
  f = message.getMyDuration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getMyEmpty();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
  f = message.getMyFieldMask();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getMySourceContext();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_source_context_pb.SourceContext.serializeBinaryToWriter
    );
  }
  f = message.getMyStruct();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getMyTimestamp();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMyType();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_type_pb.Type.serializeBinaryToWriter
    );
  }
  f = message.getMyDoubleValue();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.compiler.CodeGeneratorRequest my_code_generator_request = 1;
 * @return {?proto.google.protobuf.compiler.CodeGeneratorRequest}
 */
proto.examplecom.WellKnownMessage.prototype.getMyCodeGeneratorRequest = function() {
  return /** @type{?proto.google.protobuf.compiler.CodeGeneratorRequest} */ (
    jspb.Message.getWrapperField(this, google_protobuf_compiler_plugin_pb.CodeGeneratorRequest, 1));
};


/** @param {?proto.google.protobuf.compiler.CodeGeneratorRequest|undefined} value */
proto.examplecom.WellKnownMessage.prototype.setMyCodeGeneratorRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.examplecom.WellKnownMessage.prototype.clearMyCodeGeneratorRequest = function() {
  this.setMyCodeGeneratorRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.WellKnownMessage.prototype.hasMyCodeGeneratorRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Any my_any = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.examplecom.WellKnownMessage.prototype.getMyAny = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/** @param {?proto.google.protobuf.Any|undefined} value */
proto.examplecom.WellKnownMessage.prototype.setMyAny = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.examplecom.WellKnownMessage.prototype.clearMyAny = function() {
  this.setMyAny(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.WellKnownMessage.prototype.hasMyAny = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Method my_method = 3;
 * @return {?proto.google.protobuf.Method}
 */
proto.examplecom.WellKnownMessage.prototype.getMyMethod = function() {
  return /** @type{?proto.google.protobuf.Method} */ (
    jspb.Message.getWrapperField(this, google_protobuf_api_pb.Method, 3));
};


/** @param {?proto.google.protobuf.Method|undefined} value */
proto.examplecom.WellKnownMessage.prototype.setMyMethod = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.examplecom.WellKnownMessage.prototype.clearMyMethod = function() {
  this.setMyMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.WellKnownMessage.prototype.hasMyMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.GeneratedCodeInfo my_generated_code_info = 4;
 * @return {?proto.google.protobuf.GeneratedCodeInfo}
 */
proto.examplecom.WellKnownMessage.prototype.getMyGeneratedCodeInfo = function() {
  return /** @type{?proto.google.protobuf.GeneratedCodeInfo} */ (
    jspb.Message.getWrapperField(this, google_protobuf_descriptor_pb.GeneratedCodeInfo, 4));
};


/** @param {?proto.google.protobuf.GeneratedCodeInfo|undefined} value */
proto.examplecom.WellKnownMessage.prototype.setMyGeneratedCodeInfo = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.examplecom.WellKnownMessage.prototype.clearMyGeneratedCodeInfo = function() {
  this.setMyGeneratedCodeInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.WellKnownMessage.prototype.hasMyGeneratedCodeInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration my_duration = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.examplecom.WellKnownMessage.prototype.getMyDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.examplecom.WellKnownMessage.prototype.setMyDuration = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.examplecom.WellKnownMessage.prototype.clearMyDuration = function() {
  this.setMyDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.WellKnownMessage.prototype.hasMyDuration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Empty my_empty = 6;
 * @return {?proto.google.protobuf.Empty}
 */
proto.examplecom.WellKnownMessage.prototype.getMyEmpty = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 6));
};


/** @param {?proto.google.protobuf.Empty|undefined} value */
proto.examplecom.WellKnownMessage.prototype.setMyEmpty = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.examplecom.WellKnownMessage.prototype.clearMyEmpty = function() {
  this.setMyEmpty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.WellKnownMessage.prototype.hasMyEmpty = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.FieldMask my_field_mask = 7;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.examplecom.WellKnownMessage.prototype.getMyFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 7));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.examplecom.WellKnownMessage.prototype.setMyFieldMask = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.examplecom.WellKnownMessage.prototype.clearMyFieldMask = function() {
  this.setMyFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.WellKnownMessage.prototype.hasMyFieldMask = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.SourceContext my_source_context = 8;
 * @return {?proto.google.protobuf.SourceContext}
 */
proto.examplecom.WellKnownMessage.prototype.getMySourceContext = function() {
  return /** @type{?proto.google.protobuf.SourceContext} */ (
    jspb.Message.getWrapperField(this, google_protobuf_source_context_pb.SourceContext, 8));
};


/** @param {?proto.google.protobuf.SourceContext|undefined} value */
proto.examplecom.WellKnownMessage.prototype.setMySourceContext = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.examplecom.WellKnownMessage.prototype.clearMySourceContext = function() {
  this.setMySourceContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.WellKnownMessage.prototype.hasMySourceContext = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Struct my_struct = 9;
 * @return {?proto.google.protobuf.Struct}
 */
proto.examplecom.WellKnownMessage.prototype.getMyStruct = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 9));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.examplecom.WellKnownMessage.prototype.setMyStruct = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.examplecom.WellKnownMessage.prototype.clearMyStruct = function() {
  this.setMyStruct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.WellKnownMessage.prototype.hasMyStruct = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp my_timestamp = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.examplecom.WellKnownMessage.prototype.getMyTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.examplecom.WellKnownMessage.prototype.setMyTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.examplecom.WellKnownMessage.prototype.clearMyTimestamp = function() {
  this.setMyTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.WellKnownMessage.prototype.hasMyTimestamp = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Type my_type = 11;
 * @return {?proto.google.protobuf.Type}
 */
proto.examplecom.WellKnownMessage.prototype.getMyType = function() {
  return /** @type{?proto.google.protobuf.Type} */ (
    jspb.Message.getWrapperField(this, google_protobuf_type_pb.Type, 11));
};


/** @param {?proto.google.protobuf.Type|undefined} value */
proto.examplecom.WellKnownMessage.prototype.setMyType = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.examplecom.WellKnownMessage.prototype.clearMyType = function() {
  this.setMyType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.WellKnownMessage.prototype.hasMyType = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.DoubleValue my_double_value = 12;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.examplecom.WellKnownMessage.prototype.getMyDoubleValue = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 12));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.examplecom.WellKnownMessage.prototype.setMyDoubleValue = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.examplecom.WellKnownMessage.prototype.clearMyDoubleValue = function() {
  this.setMyDoubleValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.WellKnownMessage.prototype.hasMyDoubleValue = function() {
  return jspb.Message.getField(this, 12) != null;
};


goog.object.extend(exports, proto.examplecom);
