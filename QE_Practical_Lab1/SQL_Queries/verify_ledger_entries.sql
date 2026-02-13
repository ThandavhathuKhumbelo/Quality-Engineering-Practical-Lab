--Verify ledger entries
SELECT*FROM Ledger 
WHERE UserID = 102 
ORDER BY Timestamp DESC;
