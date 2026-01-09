export let data = {
    "sec_1":["name", "email","phone_number"],
    "sec_2":["school_name", "title", "start_date", "end_date"],
    "sec_3":["company", "position","responsibility", "start_date", "end_date"]
} 
export let error = {
    "sec_1":["Should be between 3 and 18 chars.", "Should be a valid email.","Should be a number."],
    "sec_2":["Should be between 6 to 30 chars.", "10 or 12 or graduation", "Should be a valid date.", "Should be a valid date."],
    "sec_3":["Should be between 3 to 20 chars.", "Developer or Data Scientist.","Write responsibility.", "Should be a valid date.", "Should be a valid date."]
}