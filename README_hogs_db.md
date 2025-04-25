
# Konfiguracja bazy danych

1. Utwórz bazę poleceniem:
```sql
CREATE DATABASE IF NOT EXISTS kontrahenci_db
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_polish_ci;
```

2. W `.env.local` uzupełnij:
```
DATABASE_URL="mysql://root:da2xY2vyCVrxlb2Q@54.38.137.2:3706/kontrahenci_db?connection_limit=10"
```

3. W katalogu projektu:
```
npx prisma db push
npx prisma generate
npm run dev
```
