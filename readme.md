# OrangeHRM Project

## Overview
This project is a Human Resource Management (HRM) system designed to streamline HR processes and improve efficiency. It includes features such as employee management, leave management, time tracking, and more.

## Features
- **Employee Management**: Add, update, and manage employee information.
- **Leave Management**: Track and manage employee leave requests.
- **Time Tracking**: Monitor and record employee working hours.
- **Payroll Management**: Automate payroll processing and calculations.
- **Reporting**: Generate various HR-related reports.

## Installation
To install and run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/xsami/orangehrm.git
    ```
2. Navigate to the project directory:
    ```bash
    cd orangehrm
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the application:
    ```bash
    npm start
    ```

## Debugger
If you're using vscode. Create the following `launch.json` configuration:
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "attach",
            "name": "Attach to Cypress Chrome",
            "port": 9222,
            "urlFilter": "https://opensource-demo.orangehrmlive.com*",
            "webRoot": "${workspaceFolder}",
            "sourceMaps": true,
            "skipFiles": [
                "cypress_runner.js",
            ],
        },
    ]
}
```
Then you can procceed and execute `npm run start:dev`.

## Usage
Once the application is running, you can access it at `http://localhost:3000`. Use the provided credentials to log in and start managing your HR processes.

## Contributing
We welcome contributions to improve the project. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Description of changes"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or support, please contact elsam1702@gmail.com
