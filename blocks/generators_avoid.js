Blockly.JavaScript["ky_032_avoid_block"] = function(block) {
    var text_ky_032_avoid_led_pin = block.getFieldValue("KY_032_AVOID_LED_PIN");
    var text_ky_032_avoid_button_pin = block.getFieldValue(
      "KY_032_AVOID_BUTTON_PIN"
    );
    var variable_ky_032_avoid_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_032_AVOID_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
	#VARIABLE
	int KY_032_AVOID_LED_PIN = ${text_ky_032_avoid_led_pin} ;// define LED Interface
	int KY_032_AVOID_BUTTON_PIN = ${text_ky_032_avoid_button_pin}; // define the obstacle avoidance sensor interface
	#END
	
	#SETUP
		pinMode (KY_032_AVOID_LED_PIN, OUTPUT) ;// define LED as output interface
	  	pinMode (KY_032_AVOID_BUTTON_PIN, INPUT) ;// define the obstacle avoidance sensor output interface
	#END	

	${variable_ky_032_avoid_value} = digitalRead (KY_032_AVOID_BUTTON_PIN) ;// digital interface will be assigned a value of 3 to read val
    `;
    return code;
  };