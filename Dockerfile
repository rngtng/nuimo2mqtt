FROM debian:buster


RUN apt-get update

RUN apt-get -y install --no-install-recommends procps wget python3-dbus python3-pip python3-setuptools python3-wheel python3-gi 
RUN apt-get -y install --no-install-recommends libdbus-1-dev dbus libudev-dev udev libical-dev systemd libglib2.0-dev libreadline-dev

# Build & install bluez
RUN cd /opt && wget https://www.kernel.org/pub/linux/bluetooth/bluez-5.44.tar.xz && tar xvf bluez-5.44.tar.xz
RUN cd /opt/bluez-5.44 && ./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var --enable-library
RUN cd /opt/bluez-5.44 && make
RUN cd /opt/bluez-5.44 && make install
RUN ln -svf /usr/libexec/bluetooth/bluetoothd /usr/sbin/

# The following command will prevent cache usage if a new version of nuimo-openhab-python is available
# ADD https://api.github.com/repos/pfink/nuimo-openhab-python/git/refs/heads/master /nuimo-openhab-python.version.txt 

# Install Nuimo-OpenHab-Python
#ENV NUIMO_OPENHAB_CONFIG_PATH=/etc/nuimo-openhab/config.yml
#RUN cd /opt && git clone https://github.com/pfink/nuimo-openhab-python
#RUN pip3 install -r /opt/nuimo-openhab-python/requirements.txt
#VOLUME /opt/nuimo-openhab-python

# Configure Entrypoint
#COPY docker-entrypoint.sh /opt/
#RUN chmod 700 /opt/docker-entrypoint.sh && ln -s /opt/docker-entrypoint.sh /docker-entrypoint.sh

#ENTRYPOINT /opt/docker-entrypoint.sh

#ENV PYTHONPATH /usr/lib/python3/dist-packagesa

RUN pip3 install nuimo
