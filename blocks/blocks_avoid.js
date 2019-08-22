Blockly.Blocks['ky_032_avoid_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-032 AVOID");
    this.appendValueInput("KY_032_AVOID_LED_PIN")
        .setCheck("Number")
        .appendField("LED PIN");
    this.appendValueInput("KY_032_AVOID_BUTTON_PIN")
        .setCheck("Number")
        .appendField("BUTTON PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};