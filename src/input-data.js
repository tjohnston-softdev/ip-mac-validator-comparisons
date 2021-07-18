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


function getMacValidStrings()
{
	var dataRes = [];
	
	dataRes.push('ab:ab:ab:ab:ab:ab', 'FF:FF:FF:FF:FF:FF', '01:02:03:04:05:ab');
	dataRes.push('01:AB:03:04:05:06', 'A9 C5 D4 9F EB D3', '01 02 03 04 05 ab');
	dataRes.push('01-02-03-04-05-ab', '0102.0304.05ab');
	
	return dataRes;
}


function getMacInvalidStrings()
{
	var dataRes = [];
	
	dataRes.push('abc', '01:02:03:04:05', '01:02:03:04:05:z0', '01:02:03:04::ab');
	dataRes.push('1:2:3:4:5:6', 'AB:CD:EF:GH:01:02', 'A9C5 D4 9F EB D3');
	dataRes.push('01-02 03:04 05 ab', '0102.03:04.05ab', '900f/dffs/sdea');
	
	return dataRes;
}


module.exports =
{
	getIpFourValid: getIpFourValidStrings,
	getIpFourInvalid: getIpFourInvalidStrings,
	getIpSixValid: getIpSixValidStrings,
	getIpSixInvalid: getIpSixInvalidStrings,
	getMacValid: getMacValidStrings,
	getMacInvalid: getMacInvalidStrings
};