Shared Dependencies:

1. NestJS: This is the main framework used for building the application. It is used in all the files.

2. JWT: This is used for token generation and validation. It is used in "auth.service.ts", "jwt.strategy.ts", "jwt-auth.guard.ts", and "jwt.util.ts".

3. bcrypt: This is used for password hashing. It is used in "auth.service.ts" and "bcrypt.util.ts".

4. Google and Microsoft Authentication: These are used for third-party authentication. They are used in "google.strategy.ts" and "microsoft.strategy.ts".

5. Roles and Permissions: These are used for managing user access. They are used in "roles.guard.ts", "role.interface.ts", "roles.decorator.ts", "role.util.ts", and all the files in the "roles" directory.

6. HTTPS and CORS: These are used for security practices. They are used in "https-redirect.middleware.ts" and "cors.middleware.ts".

7. Rate Limiting: This is used for preventing abuse. It is used in "rate-limiter.guard.ts".

8. User and Role DTOs: These are used for data transfer objects. They are used in "login.dto.ts", "register.dto.ts", "create-user.dto.ts", "update-user.dto.ts", "create-role.dto.ts", and "update-role.dto.ts".

9. User and Role Interfaces: These are used for TypeScript interfaces. They are used in "user.interface.ts" and "role.interface.ts".

10. Guards: These are used for protecting routes. They are used in "roles.guard.ts" and "jwt-auth.guard.ts".

11. Interceptors: These are used for handling HTTP requests and responses. They are used in "data.interceptor.ts" and "http-exception.interceptor.ts".

12. Decorators: These are used for adding metadata to classes. They are used in "roles.decorator.ts".

13. Utils: These are used for utility functions. They are used in "bcrypt.util.ts", "jwt.util.ts", "role.util.ts", "permission.util.ts", and "security.util.ts".