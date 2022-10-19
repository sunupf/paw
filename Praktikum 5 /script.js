function cari(e) {
    // Mencegah reload
    e.preventDefault() 
    
    // Mendapatkan value dari input yang memiliki id search
    const key = document.querySelector('#search').value 

    // Hit API
    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {query: key, num_pages: '1'},
        headers: {
          'X-RapidAPI-Key': '029f8ada41msh2d5b5c7ac81d5a2p17ce12jsn5c82b92262e9',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then(function(response) {
            console.table(response.data)
            
            const jobs = response.data.data

            let html = document.querySelector('.results')

            html.innerHTML = ""
            jobs.forEach(function(job) {
                html.innerHTML  = html.innerHTML + `
                    <div class="job">
                        <a class="job__title" href="${job.job_apply_link}">${job.job_title}</a>
                        <p>
                            ${job.job_description}
                        </p>
                        <div class="job__meta">
                            <div class="job__info job__employer">
                                <img src="images/icon-employer.svg" />
                                ${job.employer_name}
                            </div>
                            <div class="job__info job__employer">
                                <img src="images/icon-employer.svg" />
                                ${job.job_city} , ${job.job_country}
                            </div>
                        </div>
                    </div>
                `
            })
        })
    
}