'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class FibaroSmokeSensor extends ZwaveDevice {

	onMeshInit() {
		this.registerCapability('measure_battery', 'BATTERY');
		this.registerCapability('alarm_smoke', 'SENSOR_ALARM');
		this.registerCapability('alarm_heat', 'SENSOR_ALARM');
		this.registerCapability('alarm_tamper', 'SENSOR_ALARM');
		this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
	}

}

module.exports = FibaroSmokeSensor;
