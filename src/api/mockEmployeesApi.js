const employees = [
    {
        "gender": "male",
        "name": {"title": "mr", "first": "matthias", "last": "lange"},
        "location": {"street": "6094 waldweg", "city": "esslingen", "state": "berlin", "postcode": 28854},
        "email": "matthias.lange@example.com",
        "login": {
            "username": "greenladybug261",
            "password": "passport",
            "salt": "R8gKy7JK",
            "md5": "6aef9d80c28502fc50ed1c00ddd7faaf",
            "sha1": "f58667682f064908390e128597aa7206d0a0455f",
            "sha256": "2e3fa00a22b1ed0c9860e424442bb537eb569b061d9e2786d6c3ad741824da7a"
        },
        "dob": "1982-02-27 01:36:21",
        "registered": "2013-11-23 04:37:21",
        "phone": "0374-4187160",
        "cell": "0173-4369719",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/67.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
        },
        "nat": "DE"
    }, {
        "gender": "male",
        "name": {"title": "mr", "first": "mathieu", "last": "thomas"},
        "location": {
            "street": "3516 rue de l'abbé-patureau",
            "city": "reims",
            "state": "côtes-d'armor",
            "postcode": 28394
        },
        "email": "mathieu.thomas@example.com",
        "login": {
            "username": "organicduck223",
            "password": "777777",
            "salt": "71CsgfAt",
            "md5": "339b47c478eaff12fe0c0aeb2a9d4141",
            "sha1": "babb251a879ee3897ef6e9884700c80030a3383b",
            "sha256": "708fd6fb423632d8d5b973b4b23029824533c4fbb7ce8762e1dd7cd5fe688661"
        },
        "dob": "1994-02-05 22:56:26",
        "registered": "2007-02-05 16:32:19",
        "phone": "04-97-00-53-78",
        "cell": "06-98-35-84-00",
        "id": {"name": "INSEE", "value": "194180298052 04"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/54.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/54.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/54.jpg"
        },
        "nat": "FR"
    }, {
        "gender": "female",
        "name": {"title": "ms", "first": "danielle", "last": "jenkins"},
        "location": {"street": "3968 ormond quay", "city": "wexford", "state": "carlow", "postcode": 39076},
        "email": "danielle.jenkins@example.com",
        "login": {
            "username": "blacksnake631",
            "password": "schalke",
            "salt": "j8ZXHXcj",
            "md5": "5c826a2ccc0cc4fe527fb71c4cf8c5f3",
            "sha1": "1eba9897331f67afe18f1c181f1cb2218b1ff99f",
            "sha256": "471150dc824afdd0d1a0012e68f5f1dbf4e4938c17d83071d6597f26c6c5427d"
        },
        "dob": "1990-06-09 06:38:51",
        "registered": "2007-07-11 06:26:31",
        "phone": "061-987-6762",
        "cell": "081-438-7110",
        "id": {"name": "PPS", "value": "5513254T"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/29.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/29.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/29.jpg"
        },
        "nat": "IE"
    }, {
        "gender": "male",
        "name": {"title": "mr", "first": "darren", "last": "gregory"},
        "location": {"street": "1708 broadway", "city": "glasgow", "state": "west midlands", "postcode": "W9C 4DQ"},
        "email": "darren.gregory@example.com",
        "login": {
            "username": "brownbird818",
            "password": "glennwei",
            "salt": "22A1C6zA",
            "md5": "f147f245fd968f4f0640b4d0f61c6854",
            "sha1": "f6b969e9939ffbc912f18b4492d05b74c26e56cf",
            "sha256": "9fe9c908a89f727388f721c119678e0021ea8fe0830658612b131d3181b37a3e"
        },
        "dob": "1968-04-09 22:32:04",
        "registered": "2008-02-26 14:33:53",
        "phone": "0151 612 5202",
        "cell": "0764-137-173",
        "id": {"name": "NINO", "value": "XP 33 50 71 B"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/74.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
        },
        "nat": "GB"
    }, {
        "gender": "female",
        "name": {"title": "miss", "first": "sophie", "last": "brar"},
        "location": {"street": "1401 king st", "city": "brockton", "state": "nunavut", "postcode": 96919},
        "email": "sophie.brar@example.com",
        "login": {
            "username": "ticklishmouse816",
            "password": "basset",
            "salt": "bJ4GBnsF",
            "md5": "969e292ffd036f40a8e02114f56428ea",
            "sha1": "a03f21500a5fb6955912392b673bc96f35cc8181",
            "sha256": "811390f9941eb9ac4d7300ad97802bc93cdc7ab9b996687f04c11bc44af87783"
        },
        "dob": "1983-09-24 15:54:50",
        "registered": "2014-06-29 00:19:24",
        "phone": "711-324-5463",
        "cell": "960-182-8233",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/17.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/17.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/17.jpg"
        },
        "nat": "CA"
    }, {
        "gender": "female",
        "name": {"title": "miss", "first": "aubree", "last": "collins"},
        "location": {"street": "9940 edwards rd", "city": "darwin", "state": "south australia", "postcode": 6839},
        "email": "aubree.collins@example.com",
        "login": {
            "username": "goldenduck764",
            "password": "vbnm",
            "salt": "U53luUPM",
            "md5": "790383cb4412f03a2298adc64c7c673a",
            "sha1": "5f1c832ebfa0bde0635d25e670a81735789efb23",
            "sha256": "94252dffcc7415b99edcda84a657288240e73b93f2217483777ecb4be081b2ce"
        },
        "dob": "1985-05-25 17:11:41",
        "registered": "2011-05-18 11:10:06",
        "phone": "03-2538-0116",
        "cell": "0413-877-758",
        "id": {"name": "TFN", "value": "334138079"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/81.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/81.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/81.jpg"
        },
        "nat": "AU"
    }, {
        "gender": "male",
        "name": {"title": "mr", "first": "jayden", "last": "roy"},
        "location": {"street": "4203 concession road 23", "city": "campbellton", "state": "alberta", "postcode": 34971},
        "email": "jayden.roy@example.com",
        "login": {
            "username": "whitelion200",
            "password": "plum",
            "salt": "QIIoZdfA",
            "md5": "92625c00dd84051587cd9d2f8398a337",
            "sha1": "0f221ad499ecde1a9e70cdede749155aedfc8993",
            "sha256": "e23f94aa261ab311f5ed0d8ece7e5fb1cafc81dd0a88a23b3bbc02c15027aaa3"
        },
        "dob": "1949-07-07 04:41:44",
        "registered": "2015-10-29 13:29:18",
        "phone": "950-526-0014",
        "cell": "071-857-6132",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/71.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/71.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/71.jpg"
        },
        "nat": "CA"
    }, {
        "gender": "female",
        "name": {"title": "mrs", "first": "beatrice", "last": "watts"},
        "location": {
            "street": "2499 spring hill rd",
            "city": "traralgon",
            "state": "australian capital territory",
            "postcode": 9731
        },
        "email": "beatrice.watts@example.com",
        "login": {
            "username": "heavybutterfly615",
            "password": "chillin",
            "salt": "J9Q2SmKx",
            "md5": "b7e2fc228794aef987a03c8c3ee66005",
            "sha1": "8cb1b9bb6b7ea0b0acb9800a007578e4777970fc",
            "sha256": "4775fe68ed48fd583f4ffdba521c9e47ea954a4bd0dfdbe90f41a1746d9b5abe"
        },
        "dob": "1948-05-07 15:39:29",
        "registered": "2012-08-15 15:50:04",
        "phone": "00-3183-3334",
        "cell": "0433-854-412",
        "id": {"name": "TFN", "value": "344843469"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/52.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/52.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/52.jpg"
        },
        "nat": "AU"
    }, {
        "gender": "male",
        "name": {"title": "mr", "first": "ken", "last": "stevens"},
        "location": {"street": "5427 mcclellan rd", "city": "geelong", "state": "new south wales", "postcode": 607},
        "email": "ken.stevens@example.com",
        "login": {
            "username": "purplebear118",
            "password": "locks",
            "salt": "d7sPy7Wz",
            "md5": "da16d9a173bc68c1654d6f2b52f8ece8",
            "sha1": "35efd3dab77c5e80467020072218d60532754a4e",
            "sha256": "805edff32406074e576dfcdeae2f31039815c1ff4949adc3a3354806d085ff16"
        },
        "dob": "1965-10-11 02:58:44",
        "registered": "2013-03-08 10:11:05",
        "phone": "05-5832-3605",
        "cell": "0478-848-012",
        "id": {"name": "TFN", "value": "250940479"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/44.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/44.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
        },
        "nat": "AU"
    }, {
        "gender": "female",
        "name": {"title": "ms", "first": "meike", "last": "sander"},
        "location": {"street": "6135 danziger straße", "city": "stuttgart", "state": "bremen", "postcode": 61028},
        "email": "meike.sander@example.com",
        "login": {
            "username": "lazylion466",
            "password": "jensen",
            "salt": "o52oXhZ8",
            "md5": "4233ff1e12295a3081f22f8e5d214cb8",
            "sha1": "0f15d1f52ff6a5c72a836df0e66513d7ad7917c9",
            "sha256": "5c6e3de5cdd44b8a64731ca22c77335eec9868b0f4c85d465c6844160c45d42c"
        },
        "dob": "1959-03-16 23:49:36",
        "registered": "2008-03-25 23:41:18",
        "phone": "0330-2939877",
        "cell": "0173-5801413",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/37.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/37.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/37.jpg"
        },
        "nat": "DE"
    }];

class EmployeesApi {
    static getAllEmployees() {
        return new Promise((resolve, reject) => setTimeout(() => resolve(employees)), 1200);
    }
    
    static searchEmployeeByName(qs) {
        return new Promise((resolve, reject) => {
            let result = employees.filter(employee => {
                const fullName = `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`;
                return fullName.indexOf(qs.toLowerCase()) > -1;
            });
            
            resolve(result);
        })
    }
}

export default EmployeesApi;