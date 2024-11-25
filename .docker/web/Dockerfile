FROM node:20-bullseye

RUN apt update
RUN apt install -y cron vim curl zip git default-mysql-client nano

WORKDIR /var/www

ARG USERNAME=root
ARG UID=0
ARG GROUP=root
ARG ROOTPASS=l3tm31n

RUN usermod --password $(echo ${ROOTPASS} | openssl passwd -1 -stdin) root

RUN if [ ${USERNAME} != "root" ]; then \
    useradd -ms /bin/bash ${USERNAME} -u ${UID} \
;fi

USER ${USERNAME}:${GROUP}
