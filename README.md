# Car shop projekt

## Cél
A projekt célja egy használtautó-kereskedés backendjének megírása ez alapján a konfigurációs fájl alapján. A program írásakor ragaszkodni fogok az elkészített tervhez, de lehet, hogy az addig szerzett tapasztalatok miatt vagy javaslatok miatt el fogok térni az itt leírtaktól.

## Felhasználók
- Regisztráció
    - Kötelező mezők:
        - (ID) -> auto-generated ObjectId
        - Email -> egyedi, regex-el ellenőrizve
        - Role -> admin, eladó,vásárló(alapértelmezett, egyéb jogokkal nem rendelkező felhasználó)
        - Jelszó -> minimum 8 karakter, kis- és nagybetűt és egy speciális karaktert tartalmazó string
        - Név
        - Active -> true, törlésnél hamis csak a logolás miatt
- Belépés
- Fiók adatainak módosítása -> mindenki csak a saját adatait módosíthatja
- Fiók "törlése" -> mindeki csak a saját fiókját törölheti, illetve admin törölheti más fiókjait is
    - "törlés" -> logolás és kapcsolatok miatt egy false-ra állított bool érték


## Kereskedések
- Összes kereskedés lekérése
	- Szűrés megvalósítása több feltétel alapján (helyszín, milyen autók vannak, értékelések)
    - Limit, offset beállítása, hogy frontenden lapozható legyen a felsorolás
- Konkrét ID alapján történő lekérés
- Új kereskedés felvitele az adatbázisba
    - Kötelező mezők:
		- (ID) -> auto-generated ObjectId
		- (Tulajdonos -> a requestet küldő eladó ID-ja)
		- Név
        - Leírás
		- Helyszín
		- Elérhetőségek
		- Nyitvatartási idő
        - Értékelések
        - Active
    - Új kereskedést csak eladó vihet fel és a jóváhagyás után válik nyilvánossá 
- Kereskedés törlése az adatbázisból ID alapján
	- A kereskedés törlésénél "törlődjenek" a kereskedés eladó autói is
        - "törlés" -> logolás és kapcsolatok miatt egy false-ra állított bool érték
- Kereskedés adatainak módosítása 

## Autók
- Összes autó lekérése
    - Szűrés megvalósítása több feltétel alapján (gyártási év, márka, ajtók száma, teljesítmény)
    - Limit beállítása, hogy frontenden lapozható legyen a felsorolás
- Konkrét ID alapján történő lekérés
- Új autó felvitele az adatbázisba
    - Kötelező mezők:
		- (ID) -> auto-generated ObjectId
        - Kereskedés ID-ja
        - Vásárló ID-ja
        - Márka
        - Gyártási év
		- Állapot
        - Ajtók száma
        - Teljesítmény
        - KM-óra állás
        - Tömeg
        - Szín
        - Active
    - Opcionális mezők
        - Leírás
- Autó törlése az adatbázisból ID alapján
- Autó adatainak módosítása 

## Alapvető és kiegészítő funkciók/elvárások
- CRUD
- A NoSQL injekciók megelőzése
- Adatok validációja Mongoose-zal
- Helytelen adatok esetén megfelelő hibaüzenetekkel és státuszkódokkal történő visszatérés
- MVC fejlesztési minta követése a backenden -> view nincs, mivel ez egy backend projekt
- Felhasználók jelszavainak titkos tárolása
    - A felhasználók kollekció csak egy nevet és egy jelszó hasht fog tartalmazni
- Publikálás: feltöltés a Github-ra



## UI terv
- [Figma UI terv](https://www.figma.com/design/AWynj2TBThD08bJUirG5cb/Aut%C3%B3keresked%C3%A9s?node-id=1-2&node-type=canvas)
- [Imgur link](https://imgur.com/a/HsgjoQ4)