Blockly.Blocks["ky_032_avoid_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY-032 AVOID");
      this.appendDummyInput()
        .appendField("LED PIN")
        .appendField(new Blockly.FieldTextInput("0"), "KY_032_AVOID_LED_PIN");
      this.appendDummyInput()
        .appendField("BUTTON PIN")
        .appendField(
          new Blockly.FieldTextInput("0"),
          "KY_032_AVOID_BUTTON_PIN"
        );
      this.appendDummyInput()
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_032_AVOID_VALUE"),
          "KY_032_AVOID_VALUE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };