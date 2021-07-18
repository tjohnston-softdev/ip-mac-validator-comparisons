function getIpFourValidStrings()
{
	var dataRes = ['127.0.0.1', '0.0.0.0', '255.255.255.255', '1.2.3.4', '255.0.0.1', '0.0.1.1'];
	return dataRes;
}

function getIpFourInvalidStrings()
{
	var dataRes = [];
	
	dataRes.push('::1', '2001:db8:0000:1:1:1:1:1', '::ffff:127.0.0.1');
	dataRes.push('137.132.10.01', '0.256.0.256', '255.256.255.256');
	
	return dataRes;
}


function getIpSixValidStrings()
{
	var dataRes = [];
	
	dataRes.push('::1', '2001:db8:0000:1:1:1:1:1', '::ffff:127.0.0.1');
	dataRes.push('fe80::1234%1', 'ff08::9abc%10', 'ff08::9abc%interface10', 'ff02::5678%pvc1.3');
	
	return dataRes;
}


function getIpSixInvalidStrings()
{
	var dataRes = [];
	
	dataRes.push('127.0.0.1', '0.0.0.0', '255.255.255.255');
	dataRes.push('1.2.3.4', '::ffff:287.0.0.1', '%');
	dataRes.push('fe80::1234%', 'fe80::1234%1%3%4', 'fe80%fe80%');
	
	return dataRes;
}


module.exports =
{
	getIpFourValid: getIpFourValidStrings,
	getIpFourInvalid: getIpFourInvalidStrings,
	getIpSixValid: getIpSixValidStrings,
	getIpSixInvalid: getIpSixInvalidStrings
};