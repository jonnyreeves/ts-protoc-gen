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

var othercom_external_child_message_pb = require('../othercom/external_child_message_pb.js');
goog.exportSymbol('proto.examplecom.ParentMessageV3', null, global);
goog.exportSymbol('proto.examplecom.ParentMessageV3.InternalChildMessage', null, global);

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
proto.examplecom.ParentMessageV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.examplecom.ParentMessageV3.repeatedFields_, null);
};
goog.inherits(proto.examplecom.ParentMessageV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.examplecom.ParentMessageV3.displayName = 'proto.examplecom.ParentMessageV3';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.examplecom.ParentMessageV3.repeatedFields_ = [2,4];



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
proto.examplecom.ParentMessageV3.prototype.toObject = function(opt_includeInstance) {
  return proto.examplecom.ParentMessageV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.examplecom.ParentMessageV3} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.ParentMessageV3.toObject = function(includeInstance, msg) {
  var f, obj = {
    internalChildMessage: (f = msg.getInternalChildMessage()) && proto.examplecom.ParentMessageV3.InternalChildMessage.toObject(includeInstance, f),
    internalChildrenList: jspb.Message.toObjectList(msg.getInternalChildrenList(),
    proto.examplecom.ParentMessageV3.InternalChildMessage.toObject, includeInstance),
    externalChildMessage: (f = msg.getExternalChildMessage()) && othercom_external_child_message_pb.ExternalChildMessage.toObject(includeInstance, f),
    externalChildrenList: jspb.Message.toObjectList(msg.getExternalChildrenList(),
    othercom_external_child_message_pb.ExternalChildMessage.toObject, includeInstance)
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
 * @return {!proto.examplecom.ParentMessageV3}
 */
proto.examplecom.ParentMessageV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.examplecom.ParentMessageV3;
  return proto.examplecom.ParentMessageV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.examplecom.ParentMessageV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.examplecom.ParentMessageV3}
 */
proto.examplecom.ParentMessageV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.examplecom.ParentMessageV3.InternalChildMessage;
      reader.readMessage(value,proto.examplecom.ParentMessageV3.InternalChildMessage.deserializeBinaryFromReader);
      msg.setInternalChildMessage(value);
      break;
    case 2:
      var value = new proto.examplecom.ParentMessageV3.InternalChildMessage;
      reader.readMessage(value,proto.examplecom.ParentMessageV3.InternalChildMessage.deserializeBinaryFromReader);
      msg.addInternalChildren(value);
      break;
    case 3:
      var value = new othercom_external_child_message_pb.ExternalChildMessage;
      reader.readMessage(value,othercom_external_child_message_pb.ExternalChildMessage.deserializeBinaryFromReader);
      msg.setExternalChildMessage(value);
      break;
    case 4:
      var value = new othercom_external_child_message_pb.ExternalChildMessage;
      reader.readMessage(value,othercom_external_child_message_pb.ExternalChildMessage.deserializeBinaryFromReader);
      msg.addExternalChildren(value);
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
proto.examplecom.ParentMessageV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.examplecom.ParentMessageV3.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.examplecom.ParentMessageV3} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.ParentMessageV3.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInternalChildMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.examplecom.ParentMessageV3.InternalChildMessage.serializeBinaryToWriter
    );
  }
  f = message.getInternalChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.examplecom.ParentMessageV3.InternalChildMessage.serializeBinaryToWriter
    );
  }
  f = message.getExternalChildMessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      othercom_external_child_message_pb.ExternalChildMessage.serializeBinaryToWriter
    );
  }
  f = message.getExternalChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      othercom_external_child_message_pb.ExternalChildMessage.serializeBinaryToWriter
    );
  }
};



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
proto.examplecom.ParentMessageV3.InternalChildMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.examplecom.ParentMessageV3.InternalChildMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.examplecom.ParentMessageV3.InternalChildMessage.displayName = 'proto.examplecom.ParentMessageV3.InternalChildMessage';
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
proto.examplecom.ParentMessageV3.InternalChildMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.examplecom.ParentMessageV3.InternalChildMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.examplecom.ParentMessageV3.InternalChildMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.ParentMessageV3.InternalChildMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    myString: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.examplecom.ParentMessageV3.InternalChildMessage}
 */
proto.examplecom.ParentMessageV3.InternalChildMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.examplecom.ParentMessageV3.InternalChildMessage;
  return proto.examplecom.ParentMessageV3.InternalChildMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.examplecom.ParentMessageV3.InternalChildMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.examplecom.ParentMessageV3.InternalChildMessage}
 */
proto.examplecom.ParentMessageV3.InternalChildMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMyString(value);
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
proto.examplecom.ParentMessageV3.InternalChildMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.examplecom.ParentMessageV3.InternalChildMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.examplecom.ParentMessageV3.InternalChildMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.ParentMessageV3.InternalChildMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMyString();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string my_string = 1;
 * @return {string}
 */
proto.examplecom.ParentMessageV3.InternalChildMessage.prototype.getMyString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.examplecom.ParentMessageV3.InternalChildMessage.prototype.setMyString = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional InternalChildMessage internal_child_message = 1;
 * @return {?proto.examplecom.ParentMessageV3.InternalChildMessage}
 */
proto.examplecom.ParentMessageV3.prototype.getInternalChildMessage = function() {
  return /** @type{?proto.examplecom.ParentMessageV3.InternalChildMessage} */ (
    jspb.Message.getWrapperField(this, proto.examplecom.ParentMessageV3.InternalChildMessage, 1));
};


/** @param {?proto.examplecom.ParentMessageV3.InternalChildMessage|undefined} value */
proto.examplecom.ParentMessageV3.prototype.setInternalChildMessage = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.examplecom.ParentMessageV3.prototype.clearInternalChildMessage = function() {
  this.setInternalChildMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.ParentMessageV3.prototype.hasInternalChildMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated InternalChildMessage internal_children = 2;
 * @return {!Array.<!proto.examplecom.ParentMessageV3.InternalChildMessage>}
 */
proto.examplecom.ParentMessageV3.prototype.getInternalChildrenList = function() {
  return /** @type{!Array.<!proto.examplecom.ParentMessageV3.InternalChildMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.examplecom.ParentMessageV3.InternalChildMessage, 2));
};


/** @param {!Array.<!proto.examplecom.ParentMessageV3.InternalChildMessage>} value */
proto.examplecom.ParentMessageV3.prototype.setInternalChildrenList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.examplecom.ParentMessageV3.InternalChildMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.examplecom.ParentMessageV3.InternalChildMessage}
 */
proto.examplecom.ParentMessageV3.prototype.addInternalChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.examplecom.ParentMessageV3.InternalChildMessage, opt_index);
};


proto.examplecom.ParentMessageV3.prototype.clearInternalChildrenList = function() {
  this.setInternalChildrenList([]);
};


/**
 * optional othercom.ExternalChildMessage external_child_message = 3;
 * @return {?proto.othercom.ExternalChildMessage}
 */
proto.examplecom.ParentMessageV3.prototype.getExternalChildMessage = function() {
  return /** @type{?proto.othercom.ExternalChildMessage} */ (
    jspb.Message.getWrapperField(this, othercom_external_child_message_pb.ExternalChildMessage, 3));
};


/** @param {?proto.othercom.ExternalChildMessage|undefined} value */
proto.examplecom.ParentMessageV3.prototype.setExternalChildMessage = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.examplecom.ParentMessageV3.prototype.clearExternalChildMessage = function() {
  this.setExternalChildMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.ParentMessageV3.prototype.hasExternalChildMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated othercom.ExternalChildMessage external_children = 4;
 * @return {!Array.<!proto.othercom.ExternalChildMessage>}
 */
proto.examplecom.ParentMessageV3.prototype.getExternalChildrenList = function() {
  return /** @type{!Array.<!proto.othercom.ExternalChildMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, othercom_external_child_message_pb.ExternalChildMessage, 4));
};


/** @param {!Array.<!proto.othercom.ExternalChildMessage>} value */
proto.examplecom.ParentMessageV3.prototype.setExternalChildrenList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.othercom.ExternalChildMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.othercom.ExternalChildMessage}
 */
proto.examplecom.ParentMessageV3.prototype.addExternalChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.othercom.ExternalChildMessage, opt_index);
};


proto.examplecom.ParentMessageV3.prototype.clearExternalChildrenList = function() {
  this.setExternalChildrenList([]);
};


goog.object.extend(exports, proto.examplecom);
