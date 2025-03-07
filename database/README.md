# Project Database Setup

This guide will help you set up the database for the project. Follow these steps carefully, and you'll be ready to go in no time!

## Prerequisites

1. **PostgreSQL**: Make sure you have PostgreSQL installed on your machine. You can download it from [here](https://www.postgresql.org/download/).
2. **psql**: Ensure you have the `psql` command-line tool installed (comes with PostgreSQL).
3. **Environment File**: Create an `.env` file in the root directory of the project with the following content:
   ```env
   # .env
   READONLY_PASSWORD=your_secure_password
   READWRITE_PASSWORD=your_secure_password
   ```

## Steps to Create the Database

1. **Connect to psql**:
   ```bash
   psql -U your_username
   ```
2. **Fill Password**
   ```bash
   password: mypassword
   ```
3. **Create the Database**:
   ```sql
   CREATE DATABASE at_tech_db;
   ```

## Steps to Create the Database Tables

1. **Navigate to the Correct Directory**:
   ```bash
   cd database
   ```
2. **Export Environment Variables**:
   ```bash
   export $(grep -v '^#' .env | xargs)
   ```
3. **Substitute the Environment Variables**:
   ```bash
   envsubst < create_tables.sql > create_tables_temp.sql
   ```
4. **Execute the SQL Query**:
   ```bash
   psql -U your_username -f create_tables_temp.sql
   ```

## Alternative Full Command

Alternatively a one-liner:

```bash
export $(grep -v '^#' .env | xargs) && envsubst < create_tables.sql > create_tables_temp.sql && psql -U your_username -f create_tables_temp.sql
```
