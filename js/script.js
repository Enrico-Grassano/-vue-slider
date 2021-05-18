var app = new Vue (
    {
        el: "#root",
        data: {
            images: [
                "https://it.normandie-tourisme.fr/wp-content/uploads/sites/6/2020/01/8118-Mont-Saint-Michel-couleur-dautomne-%C2%A9-DaLiu-Shutterstock.com-%C2%A9-DaLiu-Shutterstock.com_.jpg",
                "https://img.ev.mu/images/attractions/6939/960x640/432719.jpg",
                "https://www.giappominkia.com/wp-content/uploads/monte-fuji.jpg",
                "https://amicimieiphukettravelagency.com/wp-content/uploads/2017/09/cosa-vedere-a-bangkok.jpg",
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-469306362-1540539319.jpg"
            ],
            imageIndex: 0,
            prevImage: ""
    
        },
        methods: {
            nextImage: function() {
                this.imageIndex++;
                if ((this.imageIndex == this.images.length)) {
                    this.imageIndex = 0;
                }
            }
        },
    }
)