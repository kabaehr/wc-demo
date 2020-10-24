export class ReservationService {
	setReservations(seatsToReserve) {
		for (const seat of seatsToReserve) {
			const index = this.seats.indexOf(seat);
			if (index !== -1) {
				this.seats[index].hasReservation = true;
			}
		}
	}

	getSeats() {
		return this.seats;
	}

	constructor() {
		this.seats = [
			{
				id: '5cdb0d73bd1ae09b60d69445',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 0
			},
			{
				id: '5cdb0d73ec972a21449482a1',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 1
			},
			{
				id: '5cdb0d730e51ebbb5af4e2c9',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 2
			},
			{
				id: '5cdb0d731340e6ec3ce9fba0',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 3
			},
			{
				id: '5cdb0d73b57360fe86a016a2',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 4
			},
			{
				id: '5cdb0d7328d658fe74ede0a8',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 5
			},
			{
				id: '5cdb0d73e850884b41378370',
				hasReservation: false,
				price: 8.5,
				type: 'disabled',
				row: 'A',
				number: 6
			},
			{
				id: '5cdb0d73fc7a003479f7db12',
				hasReservation: false,
				price: 8.5,
				type: 'disabled',
				row: 'A',
				number: 7
			},
			{
				id: '5cdb0d73b8af9d6f2412adb0',
				hasReservation: true,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 8
			},
			{
				id: '5cdb0d735349551e34365fb3',
				hasReservation: true,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 9
			},
			{
				id: '5cdb0d73dea123ac295b29c4',
				hasReservation: true,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 10
			},
			{
				id: '5cdb0d734b9dbb0d697a1c4d',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 11
			},
			{
				id: '5cdb0d730d30be592ff5a62b',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 12
			},
			{
				id: '5cdb0d73e110526f5929db4e',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 13
			},
			{
				id: '5cdb0d734ba1127cf4694012',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 14
			},
			{
				id: '5cdb0d73697f2096539860e3',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 15
			},
			{
				id: '5cdb0d7321290fe97a4883ac',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 16
			},
			{
				id: '5cdb0d736f79477b9fbfe60d',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 17
			},
			{
				id: '5cdb0d737083d73f2c175220',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 18
			},
			{
				id: '5cdb0d73ed0fab18dcfe47e2',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 19
			},
			{
				id: '5cdb0d734360d3e9c87b9be3',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 20
			},
			{
				id: '5cdb0d735d86041fa47cbf7d',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 21
			},
			{
				id: '5cdb0d73179a82315431e4c3',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 22
			},
			{
				id: '5cdb0d731824be691c492b90',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 23
			},
			{
				id: '5cdb0d73b73b40cf5808ccff',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 24
			},
			{
				id: '5cdb0d73c4c4b55f055abd49',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 25
			},
			{
				id: '5cdb0d734bfe9f192e31bae5',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 26
			},
			{
				id: '5cdb0d736f8bee56a81c72f0',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 27
			},
			{
				id: '5cdb0d73ad9bc3ab8413c568',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 28
			},
			{
				id: '5cdb0d73b4371d9077163fe9',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 29
			},
			{
				id: '5cdb0d73786381e836d5e36e',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 30
			},
			{
				id: '5cdb0d73caafc27d6ce1a5bd',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 31
			},
			{
				id: '5cdb0d7346bb97352e07c4a2',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 32
			},
			{
				id: '5cdb0d734baf8b4890132708',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 33
			},
			{
				id: '5cdb0d73e3f3157c2d7d5ccd',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 34
			},
			{
				id: '5cdb0d73f5b13ec720593b41',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 35
			},
			{
				id: '5cdb0d731273e48c22c29eb7',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 36
			},
			{
				id: '5cdb0d732016f6740e2e863a',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 37
			},
			{
				id: '5cdb0d73f1d9ca455b5943f8',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 38
			},
			{
				id: '5cdb0d7350ef588e97caf956',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 39
			},
			{
				id: '5cdb0d73a9a3231fdb853b66',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 40
			},
			{
				id: '5cdb0d732bc95e2730c9ddad',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 41
			},
			{
				id: '5cdb0d73248f482396407430',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 42
			},
			{
				id: '5cdb0d7343d115d23a25ce37',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 43
			},
			{
				id: '5cdb0d738527579b3e1b3826',
				hasReservation: false,
				price: 7.5,
				type: 'pair',
				row: 'A',
				number: 44
			},
			{
				id: '5cdb0d7318b4e91e45c02208',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 45
			},
			{
				id: '5cdb0d7352bd42817283ddc8',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 46
			},
			{
				id: '5cdb0d73ee8a1027add4d209',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 47
			},
			{
				id: '5cdb0d7333b4f1e81893fdcd',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 48
			},
			{
				id: '5cdb0d7337235c2672e1000d',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 49
			},
			{
				id: '5cdb0d7350f102d95876982f',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 50
			},
			{
				id: '5cdb0d73d22bbac38934e7d5',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 51
			},
			{
				id: '5cdb0d738660b7dbf6e9cdfc',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 52
			},
			{
				id: '5cdb0d73ef57af0a5fb0a3bb',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 53
			},
			{
				id: '5cdb0d73c091a8c405765454',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 54
			},
			{
				id: '5cdb0d73127eac0e914a0d28',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 55
			},
			{
				id: '5cdb0d73a03ad57075539a88',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 56
			},
			{
				id: '5cdb0d73279a3c38b491019d',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 57
			},
			{
				id: '5cdb0d73cff7edb59a619bf5',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 58
			},
			{
				id: '5cdb0d73f7cc5f76725c5d56',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 59
			},
			{
				id: '5cdb0d735f5f509e63176c2b',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 60
			},
			{
				id: '5cdb0d739dbddba8b587af4c',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 61
			},
			{
				id: '5cdb0d73028046aeba1fc6f9',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 62
			},
			{
				id: '5cdb0d73fb32c0592f1cc755',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 63
			},
			{
				id: '5cdb0d7334435a8faeb49938',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 64
			},
			{
				id: '5cdb0d738922b2bd0e8b41c6',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 65
			},
			{
				id: '5cdb0d737c387687409aa798',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 66
			},
			{
				id: '5cdb0d73679b2fd24420e1f0',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 67
			},
			{
				id: '5cdb0d738f0d134a0dc264ad',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 68
			},
			{
				id: '5cdb0d7379aa23087c1cafe3',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 69
			},
			{
				id: '5cdb0d736427d908025534e5',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 70
			},
			{
				id: '5cdb0d735d0c404b3aae1067',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 71
			},
			{
				id: '5cdb0d73084d1c818f2b9486',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 72
			},
			{
				id: '5cdb0d73fdaf1dda81436e81',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 73
			},
			{
				id: '5cdb0d7308ea93e6d01f3d1c',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 74
			},
			{
				id: '5cdb0d73a8271779e251b69e',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 75
			},
			{
				id: '5cdb0d731e49d129d021c235',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 76
			},
			{
				id: '5cdb0d7395351c009a4dfbaa',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 77
			},
			{
				id: '5cdb0d7339e2b74f68767352',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 78
			},
			{
				id: '5cdb0d73c4495170530483b9',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 79
			},
			{
				id: '5cdb0d7397dd6ae3d7acae51',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 80
			},
			{
				id: '5cdb0d73dd1d00abc10dc091',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 81
			},
			{
				id: '5cdb0d735346b530b7ac9f3a',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 82
			},
			{
				id: '5cdb0d73ac601c0661929a19',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 83
			},
			{
				id: '5cdb0d73802b015f20217a84',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 84
			},
			{
				id: '5cdb0d73b9e7f5ee035437e2',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 85
			},
			{
				id: '5cdb0d7390ab13dd3e75325c',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 86
			},
			{
				id: '5cdb0d735c042f045bd4c461',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 87
			},
			{
				id: '5cdb0d739a24e9a8f45d7b07',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 88
			},
			{
				id: '5cdb0d7323d86bf15a673d30',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 89
			},
			{
				id: '5cdb0d734e6856434154641d',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 90
			},
			{
				id: '5cdb0d73d0b93c5e51a46155',
				hasReservation: false,
				price: 6.5,
				type: 'pair',
				row: 'A',
				number: 91
			},
			{
				id: '5cdb0d73d8cdc98ece55bf1b',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 92
			},
			{
				id: '5cdb0d730264976c08b2f26f',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 93
			},
			{
				id: '5cdb0d73c130f54e23b4b77d',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 94
			},
			{
				id: '5cdb0d73b1c3a88397caafbc',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 95
			},
			{
				id: '5cdb0d73c9fd879590818c32',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 96
			},
			{
				id: '5cdb0d73be0f21e004390689',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 97
			},
			{
				id: '5cdb0d7392b2917e4ac9fbf3',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 98
			},
			{
				id: '5cdb0d73a819d4255ec317de',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 99
			},
			{
				id: '5cdb0d73c3b32f788412f4e1',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 100
			},
			{
				id: '5cdb0d734b83d2164934fa77',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 101
			},
			{
				id: '5cdb0d733527b51225929424',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 102
			},
			{
				id: '5cdb0d73e0e8ebe851692c74',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 103
			},
			{
				id: '5cdb0d738f9328107ee4c531',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 104
			},
			{
				id: '5cdb0d733ba958c0eacaf7f4',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 105
			},
			{
				id: '5cdb0d736a89e07043c42eaf',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 106
			},
			{
				id: '5cdb0d73240550b42cdcda59',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 107
			},
			{
				id: '5cdb0d73aea7a5da2a509843',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 108
			},
			{
				id: '5cdb0d73e0877681ad083f33',
				hasReservation: true,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 109
			},
			{
				id: '5cdb0d734046106e3e6e43fc',
				hasReservation: true,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 110
			},
			{
				id: '5cdb0d73c17efcb3361632de',
				hasReservation: true,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 111
			},
			{
				id: '5cdb0d7350d5fe2116b4c809',
				hasReservation: true,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 112
			},
			{
				id: '5cdb0d73e26bb477d2781c9b',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 113
			},
			{
				id: '5cdb0d7380af54e70ac2b677',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 114
			},
			{
				id: '5cdb0d73897186fb40ee9f7c',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 115
			},
			{
				id: '5cdb0d73aee6edd903509815',
				hasReservation: false,
				price: 6.5,
				type: 'pair',
				row: 'A',
				number: 116
			},
			{
				id: '5cdb0d7399e508663523e325',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 117
			},
			{
				id: '5cdb0d737a44399f2680fb37',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 118
			},
			{
				id: '5cdb0d7332d8de7f845c512a',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 119
			},
			{
				id: '5cdb0d7389fcab5c6a58a887',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 120
			},
			{
				id: '5cdb0d73b984542d907a6244',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 121
			},
			{
				id: '5cdb0d7327c9508d58a34d3d',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 122
			},
			{
				id: '5cdb0d7384cd83f43845421f',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 123
			},
			{
				id: '5cdb0d73b71f4b2898258236',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 124
			},
			{
				id: '5cdb0d73da3d3d9fff2e6fb2',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 125
			},
			{
				id: '5cdb0d73e566100b4d6a4be7',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 126
			},
			{
				id: '5cdb0d73792ff3a91b3c7fc1',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 127
			},
			{
				id: '5cdb0d73194b82da3aa9ee40',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 128
			},
			{
				id: '5cdb0d73c76865d1faa067fb',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 129
			},
			{
				id: '5cdb0d73c17b96ac69a9d171',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 130
			},
			{
				id: '5cdb0d731bea42cbeb8f09e9',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 131
			},
			{
				id: '5cdb0d739b83abfc7e6049e4',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 132
			},
			{
				id: '5cdb0d735c2008f6d34310fd',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 133
			},
			{
				id: '5cdb0d7374286c966fdc298f',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 134
			},
			{
				id: '5cdb0d73e9be73a572d33517',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 135
			},
			{
				id: '5cdb0d7347a74e7c6746a165',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 136
			},
			{
				id: '5cdb0d734946cba4a32f5e67',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 137
			},
			{
				id: '5cdb0d73d32421417a3442c0',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 138
			},
			{
				id: '5cdb0d73d60b742110608a58',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 139
			},
			{
				id: '5cdb0d73cdd7a23d322dc118',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 140
			},
			{
				id: '5cdb0d73b90c52d1b3adaac5',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 141
			},
			{
				id: '5cdb0d73d288a1b2d1207748',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 142
			},
			{
				id: '5cdb0d73bcd126df74f746fc',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 143
			},
			{
				id: '5cdb0d73f26d6d3272271fe2',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 144
			},
			{
				id: '5cdb0d732ef0e896c35e03a0',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 145
			},
			{
				id: '5cdb0d7352a1ac58065675ea',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 146
			},
			{
				id: '5cdb0d73e9564a93725ba970',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 147
			},
			{
				id: '5cdb0d73f4a1f2b5cff865e8',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 148
			},
			{
				id: '5cdb0d736370939ca6c44c73',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 149
			},
			{
				id: '5cdb0d73ab9f187f7979d656',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 150
			},
			{
				id: '5cdb0d737ac478acaba4bac1',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 151
			},
			{
				id: '5cdb0d738df584abb2998e5b',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 152
			},
			{
				id: '5cdb0d73eb70333f508f0d5b',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 153
			},
			{
				id: '5cdb0d731c3c084301a4c7eb',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 154
			},
			{
				id: '5cdb0d73a5d8587f98821561',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 155
			},
			{
				id: '5cdb0d7379676828d1618956',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 156
			},
			{
				id: '5cdb0d733440e37c8bf7a4c9',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 157
			},
			{
				id: '5cdb0d736bd9ec9dbefadf15',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 158
			},
			{
				id: '5cdb0d73bac9cdeb0b2cdb7b',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 159
			},
			{
				id: '5cdb0d730d3d577f6c8146d6',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 160
			},
			{
				id: '5cdb0d738d4e11ce4b522adf',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 161
			},
			{
				id: '5cdb0d735ee2651c0af05555',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 162
			},
			{
				id: '5cdb0d73defa310e425f90c0',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 163
			},
			{
				id: '5cdb0d73e46d20dc7b3d37fc',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 164
			},
			{
				id: '5cdb0d73e1f4422efe773caa',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 165
			},
			{
				id: '5cdb0d73588c326225fbaa18',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 166
			},
			{
				id: '5cdb0d739feaeeab998fcec9',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 167
			},
			{
				id: '5cdb0d73984f6fd0028df4bd',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 168
			},
			{
				id: '5cdb0d735755a0b7ad5fdfda',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 169
			},
			{
				id: '5cdb0d731a7246072e2d9d1c',
				hasReservation: true,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 170
			},
			{
				id: '5cdb0d736914471259f12762',
				hasReservation: true,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 171
			},
			{
				id: '5cdb0d73ef6fbcd5241e0ec8',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 172
			},
			{
				id: '5cdb0d7356cffc4a08a40c4e',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 173
			},
			{
				id: '5cdb0d735367f991025cd43c',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 174
			},
			{
				id: '5cdb0d734ff35fbff7e8a862',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 175
			},
			{
				id: '5cdb0d73e0525e6884c32757',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 176
			},
			{
				id: '5cdb0d73787e594f579d6d22',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 177
			},
			{
				id: '5cdb0d73af8a3f35b3297444',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 178
			},
			{
				id: '5cdb0d73e4871b94051362bc',
				hasReservation: false,
				price: 6.5,
				type: 'pair',
				row: 'A',
				number: 179
			},
			{
				id: '5cdb0d7371f75c643fdf96b1',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 180
			},
			{
				id: '5cdb0d736f539acad728dba8',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 181
			},
			{
				id: '5cdb0d73c7d45748f902cb8c',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 182
			},
			{
				id: '5cdb0d731d7aad81a2ace937',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 183
			},
			{
				id: '5cdb0d73072d01d630a87be9',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 184
			},
			{
				id: '5cdb0d739180b1931656807e',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 185
			},
			{
				id: '5cdb0d73e02368f667d925ee',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 186
			},
			{
				id: '5cdb0d73b7c66f4e8d7bbc46',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 187
			},
			{
				id: '5cdb0d73178004d17cf73f81',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 188
			},
			{
				id: '5cdb0d7386cb8dfac6ed4881',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 189
			},
			{
				id: '5cdb0d737041f2cb6e003b7d',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 190
			},
			{
				id: '5cdb0d73ca860da71c639513',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 191
			},
			{
				id: '5cdb0d73e31a3ab267cbc64a',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 192
			},
			{
				id: '5cdb0d738300096994e3b4ed',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 193
			},
			{
				id: '5cdb0d733ca80194e82e9eeb',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 194
			},
			{
				id: '5cdb0d73399ea0639eff89dc',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 195
			},
			{
				id: '5cdb0d73cbe0e3344e12b7ef',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 196
			},
			{
				id: '5cdb0d73f5712b4977c6bea4',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 197
			},
			{
				id: '5cdb0d73f1edecff90e9104d',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 198
			},
			{
				id: '5cdb0d7360dc78ae66b3ef77',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 199
			},
			{
				id: '5cdb0d7316ad6e106c8b22be',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 200
			},
			{
				id: '5cdb0d73dabc46595e7f9c65',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 201
			},
			{
				id: '5cdb0d73b0f011ea38c8d2b2',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 202
			},
			{
				id: '5cdb0d7389b7a71a2fa8abff',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 203
			},
			{
				id: '5cdb0d7346970acb82b727f0',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 204
			},
			{
				id: '5cdb0d738c5e5bf11c0a795b',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 205
			},
			{
				id: '5cdb0d733b82925a0898f950',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 206
			},
			{
				id: '5cdb0d73649e7062e564785d',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 207
			},
			{
				id: '5cdb0d734f1ffc864673a968',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 208
			},
			{
				id: '5cdb0d73a42a41a48a67a9cf',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 209
			},
			{
				id: '5cdb0d73e0c1f91fc96b506c',
				hasReservation: false,
				price: 6.5,
				type: 'disabled',
				row: 'A',
				number: 210
			},
			{
				id: '5cdb0d737288bc041a14c042',
				hasReservation: false,
				price: 7.5,
				type: 'disabled',
				row: 'A',
				number: 211
			},
			{
				id: '5cdb0d7354ade728ea95f753',
				hasReservation: false,
				price: 8.5,
				type: 'disabled',
				row: 'A',
				number: 212
			},
			{
				id: '5cdb0d738095e982e8d7e7c3',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 213
			},
			{
				id: '5cdb0d73b7f976bac79fe551',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 214
			},
			{
				id: '5cdb0d73e73f3aa59196cb1d',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 215
			},
			{
				id: '5cdb0d7340453b14fa327f31',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 216
			},
			{
				id: '5cdb0d732414d69fc608deb4',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 217
			},
			{
				id: '5cdb0d73e58c27512d8c00ae',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 218
			},
			{
				id: '5cdb0d7331e9bc7b210d195f',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 219
			},
			{
				id: '5cdb0d73aef129962e908ca7',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 220
			},
			{
				id: '5cdb0d7312c0d936e22e972f',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 221
			},
			{
				id: '5cdb0d73736c7ff40d3d3941',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 222
			},
			{
				id: '5cdb0d738abfe09fa526d884',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 223
			},
			{
				id: '5cdb0d731cffac5b06348a9f',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 224
			},
			{
				id: '5cdb0d73b879aeeb55dc1a82',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 225
			},
			{
				id: '5cdb0d7326093e1eedbd43f0',
				hasReservation: false,
				price: 6.5,
				type: 'pair',
				row: 'A',
				number: 226
			},
			{
				id: '5cdb0d73574f4f3c6dbc3bd6',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 227
			},
			{
				id: '5cdb0d730d1ede3351f4f45c',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 228
			},
			{
				id: '5cdb0d733886c08fe3bc7813',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 229
			},
			{
				id: '5cdb0d733f78a0098590be79',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 230
			},
			{
				id: '5cdb0d73284a2c1923f13025',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 231
			},
			{
				id: '5cdb0d7300c08b4518731321',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 232
			},
			{
				id: '5cdb0d73ea1ed07b53e708c7',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 233
			},
			{
				id: '5cdb0d73b769e179c626319c',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 234
			},
			{
				id: '5cdb0d73ddb5b2fc1a5f902e',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 235
			},
			{
				id: '5cdb0d734e0a2bd3d9f15916',
				hasReservation: false,
				price: 8.5,
				type: 'regular',
				row: 'A',
				number: 236
			},
			{
				id: '5cdb0d73a66170f8740847c0',
				hasReservation: false,
				price: 6.5,
				type: 'regular',
				row: 'A',
				number: 237
			},
			{
				id: '5cdb0d7378b6e82d6b10889c',
				hasReservation: false,
				price: 7.5,
				type: 'regular',
				row: 'A',
				number: 238
			}
		];
	}
}
