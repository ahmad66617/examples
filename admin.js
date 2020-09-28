require('popper.js');
require('bootstrap/dist/js/bootstrap.bundle.min');
import AdminAction from "./classes/admin/AdminAction";
export const _token = document.querySelector('[name="csrf-token"]').content;

document.addEventListener('DOMContentLoaded', () => {
    document.body.onclick = evt => {
        const target = evt.target;
        const action = target.dataset.action || null;
        if (action) new AdminAction(target, action).init();
    }
})
