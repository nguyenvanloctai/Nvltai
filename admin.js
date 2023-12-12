/**
* @author    NGUYỄN VĂN LỘC TÀI LEGEND
* @github    ĐỐ MÀY BIẾT
* @channel   PHÈN ĐÉO SÀI
* @facebook  https://www.facebook.com/nvltai.info
*/
import {
  resolve as resolvePath
} from 'path';
import {
  readFileSync,
  readdirSync,
  writeFileSync,
  unlinkSync
} from "fs";
import inquirer from 'inquirer';
import logger from './System/Core/helpers/console.js';
import Banner from './System/Banner.js';
var _0xdb73=["\x6D\x61\x69\x6E\x50\x61\x74\x68","\x63\x77\x64","\x43\x6F\x6E\x66\x69\x67","\x69\x64\x5F\x61\x64\x6D\x69\x6E","","\x56\x75\x69\x20\x6C\xF2\x6E\x67\x20\x6E\x68\u1EAD\x70\x20\x49\x44\x20\x41\x44\x4D\x49\x4E","\x65\x72\x72\x6F\x72","\x73\x6F\x6D\x65","\x4D\x4F\x44\x45\x52\x41\x54\x4F\x52\x53","\x41\x42\x53\x4F\x4C\x55\x54\x45\x53","\x49\x44\x20\x4E\xC0\x59\x20\u0110\xC3\x20\x4C\xC0\x20\x53\x55\x50\x50\x45\x52\x20\x41\x44\x4D\x49\x4E","\x65\x78\x69\x74","\x70\x75\x73\x68","\x73\x61\x76\x65","\x43\u1EA5\x70\x20\x71\x75\x79\u1EC1\x6E\x20\x53\x75\x70\x70\x65\x72\x20\x41\x64\x6D\x69\x6E\x20\x54\x68\xE0\x6E\x68\x20\x43\xF4\x6E\x67","\x69\x6E\x66\x6F","\x74\x68\x65\x6E","\x74\x65\x78\x74","\x4E\x68\u1EAD\x70\x20\x49\x44\x20\x41\x44\x4D\x49\x4E\x3A","\x70\x72\x6F\x6D\x70\x74","\x63\x6F\x6E\x66\x69\x67\x2E\x6D\x61\x69\x6E\x2E\x6A\x73\x6F\x6E","\x75\x74\x66\x38","\x70\x61\x72\x73\x65","\x52\x45\x46\x52\x45\x53\x48","\x68\x61\x73\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79","\x34\x33\x32\x30\x30\x30\x30\x30","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x63\x6F\x6E\x66\x69\x67\x2E\x6D\x61\x69\x6E\x2E\x74\x65\x6D\x70\x2E\x6A\x73\x6F\x6E"];
global[_0xdb73[0]]= resolvePath(process[_0xdb73[1]]());global[_0xdb73[2]]= loadConfig();Banner();inquirer[_0xdb73[19]]([{type:_0xdb73[17],name:_0xdb73[3],message:_0xdb73[18]}])[_0xdb73[16]]((_0x4951x1)=>
{
	if(_0x4951x1[_0xdb73[3]]=== _0xdb73[4])
	{
		logger[_0xdb73[6]](_0xdb73[5])
	}
	else 
	{
		if(global[_0xdb73[2]][_0xdb73[8]][_0xdb73[7]]((_0x4951x2)=>
		{
			return _0x4951x2== _0x4951x1[_0xdb73[3]]
		}
		)|| global[_0xdb73[2]][_0xdb73[9]][_0xdb73[7]]((_0x4951x2)=>
		{
			return _0x4951x2== _0x4951x1[_0xdb73[3]]
		}
		))
		{
			logger[_0xdb73[6]](_0xdb73[10]);process[_0xdb73[11]]()
		}
		else 
		{
			global[_0xdb73[2]][_0xdb73[8]][_0xdb73[12]](String(_0x4951x1[_0xdb73[3]]));global[_0xdb73[2]][_0xdb73[9]][_0xdb73[12]](String(_0x4951x1[_0xdb73[3]]));global[_0xdb73[2]][_0xdb73[13]]();logger[_0xdb73[15]](_0xdb73[14])
		}
	}
}
);function loadConfig()
{
	const _0x4951x4=JSON[_0xdb73[22]](readFileSync(resolvePath(global[_0xdb73[0]],_0xdb73[2],_0xdb73[20]),_0xdb73[21]));
	if(!_0x4951x4[_0xdb73[24]](_0xdb73[23]))
	{
		_0x4951x4[_0xdb73[23]]= _0xdb73[25]
	}
	if(!_0x4951x4[_0xdb73[24]](_0xdb73[9]))
	{
		_0x4951x4[_0xdb73[9]]= []
	}
	_0x4951x4[_0xdb73[13]]= ()=>
	{
		const _0x4951x5=JSON[_0xdb73[26]](_0x4951x4,(_0x4951x6,_0x4951x7)=>
		{
			if(_0x4951x6== _0xdb73[13])
			{
				return undefined
			}
			return _0x4951x7
		}
		,4);
		const _0x4951x8=resolvePath(global[_0xdb73[0]],_0xdb73[2],_0xdb73[27]);
		writeFileSync(_0x4951x8,_0x4951x5,_0xdb73[21]);writeFileSync(resolvePath(global[_0xdb73[0]],_0xdb73[2],_0xdb73[20]),_0x4951x5,_0xdb73[21]);unlinkSync(_0x4951x8)
	}
	;_0x4951x4[_0xdb73[13]]();return _0x4951x4
}
