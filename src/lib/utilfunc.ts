import {navLinks} from "@/util/nav";

export const getNavLinkByName = (name: string) =>
    navLinks.find(
        (link) =>
            link.name.replace(" ", "").toLowerCase()
            ===
            name.replace(" ", "").toLowerCase()
    );


export const formatMobileNumber = (mobileNumber: string) => {
    // Remove all non-digit characters
    const digits = mobileNumber.replace(/\D/g, '');

    // Format the number as  XXX-XXX-XXXX
    return digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}

export const safeInput = (v: string) => v.replace(/\s+/g, " ").trim();
