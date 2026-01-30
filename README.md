Markdown
# RESTful API Activity - [Mark Dwayne S. Jandusay]
## Best Practices Implementation
**1. Environment Variables:**
- Why did we put `BASE_URI` in `.env` instead of hardcoding it?
- Answer: For consistency and easy usage of API's
**2. Resource Modeling:**
- Why did we use plural nouns (e.g., `/dishes`) for our routes?
- Answer: It represents the collection of resources adhering the REST standard
**3. Status Codes:**
- When do we use `201 Created` vs `200 OK`?
- Answer: `201 Created` when a new resources is created while the `200 OK` shows succesion of request but no new resources
- Why is it important to return `404` instead of just an empty array or a generic error?
- Answer: So the user would be aware of their error instead of wondering how nothing showed up
**4. Testing:**
- <img width="1919" height="1079" alt="Screenshot 2026-01-30 202933" src="https://github.com/user-attachments/assets/8421c7c5-3472-4dcd-b6c2-39d2d7c072f6" />
