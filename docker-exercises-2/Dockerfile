FROM ubuntu:latest
# Apache HTTP Sunucusu'nu yükleyin
RUN apt-get update && \
    apt-get install -y apache2 && \
    apt-get clean
# Apache karşılama sayfasını özelleştirin
RUN echo '<html><body><h1>Welcome to my website! My name is [Your Name]</h1></body></html>' > /var/www/html/index.html
# Apache'nin erişilebilir olması için 80 numaralı portu açın
EXPOSE 80
# Apache'yi ön planda çalıştırarak konteynerin sürekli çalışmasını sağla
CMD ["apachectl", "-D", "FOREGROUND"]
