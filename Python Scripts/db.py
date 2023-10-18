import mysql.connector
# Queries
# cursor.execute("SELECT * FROM `test`")

# Fetching Data

# for row in results:
#     print(row)


class DB:
    def __init__(self):
        # Connect to the database
        self.cnx = mysql.connector.connect(
            user='Zlatko',
            password='gunz&granadez187',
            host='localhost',
            database='ttt(tik_tok_takeover)'
        )
        # self.cnx = mysql.connector.connect(
        #     user='Zlatko1',
        #     password='1123QwER',
        #     host='5.tcp.eu.ngrok.io',
        #     database='chichenska_sila',
        #     port=16729,
        # )

        # Queries

    def insertDataOutlook(self, MailData):
        # Create a cursor
        cursor = self.cnx.cursor()
        try:
            insertQuery = 'INSERT INTO `email_users` (email, password, full_name, country, birthdate ) VALUES (%s, %s, %s, %s, %s)'
            cursor.execute(insertQuery, MailData)
            # Commit the changes
            self.cnx.commit()
        except mysql.connector.errors.InternalError as Error:
            print('An internal error occured: ', Error)
        finally:
            cursor.close()
            self.cnx.close()

    def insertDataTikTok(self, UserData):
        # Create a cursor
        cursor = self.cnx.cursor()
        try:
            insertQuery = 'INSERT INTO `tik_tok_users` (email, username, password, country ) VALUES (%s, %s, %s, %s)'
            cursor.execute(insertQuery, UserData)
            setQuery = "UPDATE `email_users` SET `tik_tok` = 1 WHERE `email` = %s"
            cursor.execute(setQuery, UserData[0])

            # Commit the changes
            self.cnx.commit()
            print('Changes committed')
        except mysql.connector.errors.InternalError as Error:
            print('An internal error occured: ', Error)
        finally:
            cursor.close()
            self.cnx.close()

    def getDataTikTok(self, offset):
        cursor = self.cnx.cursor()
        try:
            cursor.execute(
                f"SELECT `email`, `password` FROM `email_users` WHERE `tik_tok` IS NULL LIMIT 1 OFFSET {offset}")
            results = cursor.fetchall()
            return results
        except mysql.connector.errors.InternalError as Error:
            print('An internal error occured: ', Error)
        finally:
            cursor.close()
            self.cnx.close()

    def getCount(self, tableName):
        cursor = self.cnx.cursor()
        try:
            cursor.execute(f"SELECT COUNT(*) FROM `{tableName}`")
            results = cursor.fetchall()
            return results
        except mysql.connector.errors.InternalError as Error:
            print('An internal error occured: ', Error)
        finally:
            cursor.close()
            self.cnx.close()
