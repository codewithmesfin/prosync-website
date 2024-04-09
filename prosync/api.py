

import frappe
from frappe import _



@frappe.whitelist(allow_guest=True)
def websiteLeads():
    return frappe.db.get_list('Website Lead',fields=[ "fullname",
  "phonenumber",
  "email",
  "linkedin",
  "message"])



@frappe.whitelist(allow_guest=True)
def captureLead(fullname, phonenumber, email, linkedin, message):
    try:
        lead = frappe.get_doc({
            "doctype": "Website Lead",
            "fullname": fullname,
            "phonenumber": phonenumber,
            "email": email,
            "linkedin": linkedin,
            "message": message
        })
        lead.insert(ignore_permissions=True)
        frappe.db.commit()
        return _("Lead inserted successfully.")
    except Exception as e:
        frappe.log_error(_("Error while inserting lead: {0}").format(str(e)))
        return _("Failed to insert lead. Please try again later.")





# @frappe.whitelist(allow_guest=True)

# def articles():
#     return frappe.db.get_list('Blog Post',  fields=["title",
#   "blog_category",
#   "blogger",
#   "route",
#   "read_time",
#   "column_break_3",
#   "published_on",
#   "published",
#   "featured",
#   "hide_cta",
#   "enable_email_notification",
#   "disable_comments",
#   "disable_likes",
#   "section_break_5",
#   "blog_intro",
#   "content_type",
#   "content",
#   "content_md",
#   "content_html",
#   "email_sent",
#   "meta_tags",
#   "meta_title",
#   "meta_description",
#   "column_break_18",
#   "meta_image",
#   "section_break_20"],)

# @frappe.whitelist(allow_guest=True)
# def article():
#     return "article..."


