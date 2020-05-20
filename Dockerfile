FROM debian:buster

RUN apt-get update

RUN apt-get -y install --no-install-recommends build-essential procps wget xz-utils python3-dbus python3-pip python3-setuptools python3-wheel python3-gi 
RUN apt-get -y install --no-install-recommends libdbus-1-dev dbus libudev-dev udev libical-dev systemd libglib2.0-dev libreadline-dev

# Build & install bluez
RUN cd /opt && wget https://www.kernel.org/pub/linux/bluetooth/bluez-5.44.tar.xz && tar xvf bluez-5.44.tar.xz
RUN cd /opt/bluez-5.44 && ./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var --enable-library
RUN cd /opt/bluez-5.44 && make
RUN cd /opt/bluez-5.44 && make install
RUN ln -svf /usr/libexec/bluetooth/bluetoothd /usr/sbin/

COPY init.sh /

RUN mkdir -p /var/run/dbus

RUN pip3 install nuimo
