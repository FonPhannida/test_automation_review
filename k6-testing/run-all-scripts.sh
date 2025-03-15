#!/bin/bash ./run-all-scripts.sh
k6 run testcase/user/GET_user.js
k6 run testcase/user/GET_users_list.js
k6 run testcase/login/POST_login_success.js
k6 run testcase/login/POST_login_unsuccess.js