class Fetch {
    constructor(options) {
        this.options = options;
        if (!this.options.success) this.options.success = this.success;
        if (!this.options.error) this.options.error = this.error;
    }

    send() {
        try {
            this._request()
                .then(response => this._checkResponse(response))
                .catch(err => {
                    throw new Error('something went wrong!Look ' + err);
                });
        } catch (err) {
            console.error(err);
        }
        return this;
    }

    _request() {
        return fetch(this.options.url, {
            method: this.options.method || 'get',
            headers: this._headers(),
            body: JSON.stringify(this.options.body),
        });
    }

    _headers() {
        return {
            "X-CSRF-TOKEN": this.options.token,
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        }
    }

    _checkResponse(response) {
        return response.ok ? this.options.success(response.json()) : this.options.error();
    }

    success() {
        alertSuccess('Выполнено!')
    }

    error() {
        alertDanger('Ошибка сервера.Перезагрузите страницу!')
    }
}
