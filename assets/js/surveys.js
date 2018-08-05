! function (u) {
	"use strict";
	window.GOVUK = window.GOVUK || {};
	var e = function (e, t) {
			return "<a " + (t = t ? 'class="' + t + '"' : "") + ' href="{{surveyUrl}}" id="take-survey" target="_blank" rel="noopener noreferrer">' + e + "</a>"
		},
		t = function (e) {
			return '<section id="user-satisfaction-survey" class="visible" aria-hidden="false">  <div class="survey-wrapper">    <a class="survey-close-button" href="#user-survey-cancel" aria-labelledby="survey-title user-survey-cancel" id="user-survey-cancel" role="button">Close</a>    <h2 class="survey-title" id="survey-title">{{title}}</h2>' + e + "  </div></section>"
		},
		n = t("<p>" + e("{{surveyCta}}", "survey-primary-link") + ' <span class="postscript-cta">{{surveyCtaPostscript}}</span></p>'),
		i = t('<div id="email-survey-pre">  <a class="survey-primary-link" href="#email-survey-form" id="email-survey-open" rel="noopener noreferrer" role="button" aria-expanded="false">    {{surveyCta}}  </a></div><form id="email-survey-form" action="/contact/govuk/email-survey-signup" method="post" class="js-hidden" aria-hidden="true">  <div class="survey-inner-wrapper">    <div id="survey-form-description" class="survey-form-description">{{surveyFormDescription}}      <br> {{surveyFormCtaPostscript}}    </div>    <label class="survey-form-label" for="survey-email-address">      Email Address    </label>    <input name="email_survey_signup[survey_id]" type="hidden" value="{{surveyId}}">    <input name="email_survey_signup[survey_source]" type="hidden" value="{{surveySource}}">    <input name="email_survey_signup[ga_client_id]" type="hidden" value="{{gaClientId}}">    <input class="survey-form-input" name="email_survey_signup[email_address]" id="survey-email-address" type="text" aria-describedby="survey-form-description">    <button class="survey-form-button" type="submit">{{surveyFormCta}}</button>' + e("{{surveyFormNoEmailInvite}}") + '  </div></form><div id="email-survey-post-success" class="js-hidden" aria-hidden="true" tabindex="-1">  {{surveySuccess}}</div><div id="email-survey-post-failure" class="js-hidden" aria-hidden="true" tabindex="-1">  {{surveyFailure}}</div>'),
		r = 2,
		a = "(max-width: 800px)",
		c = {
			defaultSurvey: {
				url: "https://www.smartsurvey.co.uk/s/gov_uk?c={{currentPath}}",
				identifier: "user_satisfaction_survey",
				frequency: 6,
				surveyType: "email"
			},
			smallSurveys: [{
				identifier: "home_office_research_survey_1",
				surveyType: "url",
				frequency: 5,
				startTime: new Date("May 01, 2018").getTime(),
				endTime: new Date("November 01, 2018").getTime(),
				url: "https://www.homeofficesurveys.homeoffice.gov.uk/s/MLSJL/",
				templateArgs: {
					title: "Help improve GOV.UK",
					surveyCta: "Answer some questions about yourself to join the research community",
					surveyCtaPostscript: "This link opens in a new tab"
				},
				activeWhen: {
					path: ["^/guidance/status-of-eu-nationals-in-the-uk-what-you-need-to-know$", "^/government/news/blue-uk-passport-to-return-after-eu-exit$", "^/government/publications/eu-citizens-arriving-in-the-uk-during-the-implementation-period/eu-citizens-arriving-in-the-uk-during-the-implementation-period$", "^/government/organisations/home-office/about/complaints-procedure$", "^/emergency-travel-document/how-to-apply$"]
				},
				allowedOnMobile: !0
			}, {
				identifier: "home_office_research_survey_2",
				surveyType: "url",
				frequency: 5,
				startTime: new Date("May 01, 2018").getTime(),
				endTime: new Date("November 01, 2018").getTime(),
				url: "https://www.homeofficesurveys.homeoffice.gov.uk/s/WGPEU/",
				templateArgs: {
					title: "Help improve GOV.UK",
					surveyCta: "Answer some questions about yourself to join the research community",
					surveyCtaPostscript: "This link opens in a new tab"
				},
				activeWhen: {
					path: ["^/emergency-travel-document/how-to-apply$", "^/government/collections/uk-leaving-the-eu-what-you-need-to-know$", "^/guidance/dbs-check-requests-guidance-for-employers$", "^/government/case-studies/example-case-studies-eu-citizens-rights-in-the-uk$"]
				},
				allowedOnMobile: !0
			}, {
				identifier: "home_office_research_survey_3",
				surveyType: "url",
				frequency: 5,
				startTime: new Date("May 01, 2018").getTime(),
				endTime: new Date("November 01, 2018").getTime(),
				url: "https://www.homeofficesurveys.homeoffice.gov.uk/s/B4F8A/",
				templateArgs: {
					title: "Help improve GOV.UK",
					surveyCta: "Answer some questions about yourself to join the research community",
					surveyCtaPostscript: "This link opens in a new tab"
				},
				activeWhen: {
					path: ["^/choose-uk-visit-short-stay-visa$"]
				},
				allowedOnMobile: !0
			}, {
				identifier: "hmrc-additional-needs",
				surveyType: "url",
				frequency: 1,
				startTime: new Date("May 18, 2018").getTime(),
				endTime: new Date("July 24, 2018").getTime(),
				url: "https://signup.take-part-in-research.service.gov.uk/?utm_campaign=additional_needs_hmrc&utm_source=Other&utm_medium=gov.uk&t=HMRC&id=145&c={{currentPath}}",
				templateArgs: {
					title: "Help improve GOV.UK",
					surveyCta: "Get involved in making government services better",
					surveyCtaPostscript: "This will open a short survey on another website"
				},
				activeWhen: {
					path: ["^/dealing-hmrc-additional-needs$"]
				},
				allowedOnMobile: !0
			}, {
				identifier: "additional-needs-hmrc-hearing",
				surveyType: "url",
				frequency: 1,
				startTime: new Date("May 18, 2018").getTime(),
				endTime: new Date("July 24, 2018").getTime(),
				url: "https://signup.take-part-in-research.service.gov.uk/?utm_campaign=additional_needs_hearing&utm_source=Other&utm_medium=other&t=HMRC&id=146&c={{currentPath}}",
				templateArgs: {
					title: "Help improve GOV.UK",
					surveyCta: "Get involved in making government services better",
					surveyCtaPostscript: "This will open a short survey on another website"
				},
				activeWhen: {
					path: ["^/dealing-hmrc-additional-needs/deaf-hearing-impaired$"]
				},
				allowedOnMobile: !0
			}, {
				identifier: "additional-needs-hmrc-sight",
				surveyType: "url",
				frequency: 1,
				startTime: new Date("May 18, 2018").getTime(),
				endTime: new Date("July 24, 2018").getTime(),
				url: "https://signup.take-part-in-research.service.gov.uk/?utm_campaign=additional_needs_hmrc_sight&utm_source=Other&utm_medium=other&t=HMRC&id=147&c={{currentPath}}",
				templateArgs: {
					title: "Help improve GOV.UK",
					surveyCta: "Get involved in making government services better",
					surveyCtaPostscript: "This will open a short survey on another website"
				},
				activeWhen: {
					path: ["^/dealing-hmrc-additional-needs/blind-partially-sighted$"]
				},
				allowedOnMobile: !0
			}, {
				identifier: "additional-needs-hmrc-language",
				surveyType: "url",
				frequency: 1,
				startTime: new Date("May 18, 2018").getTime(),
				endTime: new Date("July 24, 2018").getTime(),
				url: "https://signup.take-part-in-research.service.gov.uk/?utm_campaign=additional_needs_hmrc_language&utm_source=Other&utm_medium=other&t=HMRC&id=148&c={{currentPath}}",
				templateArgs: {
					title: "Help improve GOV.UK",
					surveyCta: "Get involved in making government services better",
					surveyCtaPostscript: "This will open a short survey on another website"
				},
				activeWhen: {
					path: ["^/dealing-hmrc-additional-needs/english-not-first-language$"]
				},
				allowedOnMobile: !0
			}, {
				identifier: "additional-needs-hmrc-general",
				surveyType: "url",
				frequency: 1,
				startTime: new Date("May 18, 2018").getTime(),
				endTime: new Date("July 24, 2018").getTime(),
				url: "https://signup.take-part-in-research.service.gov.uk/?utm_campaign=additional_needs_hmrc&utm_source=Other&utm_medium=gov.uk&t=HMRC&id=145&c={{currentPath}}",
				templateArgs: {
					title: "Help improve GOV.UK",
					surveyCta: "Get involved in making government services better",
					surveyCtaPostscript: "This will open a short survey on another website"
				},
				activeWhen: {
					path: ["^/government/publications/tax-credits-disability-helpsheet-tc956$", "^/government/collections/vat-reliefs-for-charities-disabled-and-older-people$", "^/help-friends-family-tax$"]
				},
				allowedOnMobile: !0
			}, {
				identifier: "agent-hmrc",
				surveyType: "url",
				frequency: 1,
				startTime: new Date("May 18, 2018").getTime(),
				endTime: new Date("July 24, 2018").getTime(),
				url: "https://signup.take-part-in-research.service.gov.uk/?utm_campaign=agent&utm_source=Other&utm_medium=other&t=HMRC&id=149&c={{currentPath}}",
				templateArgs: {
					title: "Help improve GOV.UK",
					surveyCta: "Get involved in making government services better",
					surveyCtaPostscript: "This will open a short survey on another website"
				},
				activeWhen: {
					path: ["^/government/collections/hmrc-online-services-for-agents$", "^/guidance/client-authorisation-an-overview$", "^/guidance/client-authorisation-an-overview$", "^/topic/dealing-with-hmrc/tax-agent-guidance$", "^/government/collections/agent-update$", "^/sdlt-online$", "^/government/collections/online-security-information-for-agents$", "^/government/collections/tax-agents-toolkits$", "^/government/publications/agents-strategy-an-overview$", "^/government/publications/agents-strategy-an-overview/agents-strategy-an-overview$", "^/government/publications/hmrc-agent-toolkits-film-transcript$", "^/government/publications/agent-and-client-statistics$", "^/guidance/self-assessment-for-agents-online-service$", "^/guidance/vat-online-services-for-agents$", "^/guidance/get-an-hmrc-agent-services-account$", "^/government/publications/agent-update-self-assessment-special$", "^/guidance/hmrc-working-with-tax-agents-blog$"]
				},
				allowedOnMobile: !0
			}, {
				identifier: "cds-user-panel",
				surveyType: "url",
				frequency: 1,
				startTime: new Date("May 18, 2018").getTime(),
				endTime: new Date("July 02, 2018").getTime(),
				url: "https://signup.take-part-in-research.service.gov.uk/?utm_campaign=CDSusersignup&utm_source=Other&utm_medium=other&t=HMRC&id=110&c={{currentPath}}",
				templateArgs: {
					title: "Help improve GOV.UK",
					surveyCta: "Get involved in making government services better",
					surveyCtaPostscript: "This will open a short survey on another website"
				},
				activeWhen: {
					path: ["^/government/news/getting-ready-for-the-customs-declaration-service$"]
				},
				allowedOnMobile: !0
			}, {
				identifier: "hmrc-trusts-govuk",
				surveyType: "url",
				frequency: 1,
				startTime: new Date("May 18, 2018").getTime(),
				endTime: new Date("August 01, 2018").getTime(),
				url: "https://signup.take-part-in-research.service.gov.uk/?utm_campaign=TrustsGOVuk&utm_source=govukother&utm_medium=gov.uk&t=HMRC&id=150&c={{currentPath}}",
				templateArgs: {
					title: "Help improve GOV.UK",
					surveyCta: "Get involved in making government services better",
					surveyCtaPostscript: "This will open a short survey on another website"
				},
				activeWhen: {
					path: ["^/trusts-taxes$", "^/guidance/register-your-clients-trust$", "^/guidance/register-your-clients-estate$", "^/guidance/register-your-clients-estate$", "^/trusts-taxes/trustees-tax-responsibilities$"]
				},
				allowedOnMobile: !0
			}, {
				identifier: "hmrc-awrs",
				surveyType: "url",
				frequency: 1,
				startTime: new Date("May 18, 2018").getTime(),
				endTime: new Date("August 01, 2018").getTime(),
				url: "https://signup.take-part-in-research.service.gov.uk/?utm_campaign=AWRSgov&utm_source=Other&utm_medium=other&t=HMRC&id=43&c={{currentPath}}",
				templateArgs: {
					title: "Help improve GOV.UK",
					surveyCta: "Get involved in making government services better",
					surveyCtaPostscript: "This will open a short survey on another website"
				},
				activeWhen: {
					path: ["^/check-alcohol-wholesaler-registration$"]
				},
				allowedOnMobile: !0
			}, {
				identifier: "sdes-gov",
				surveyType: "url",
				frequency: 1,
				startTime: new Date("May 18, 2018").getTime(),
				endTime: new Date("August 31, 2018").getTime(),
				url: "https://signup.take-part-in-research.service.gov.uk/?utm_campaign=SDESGov&utm_source=Other&utm_medium=gov.uk&t=HMRC&id=152&c={{currentPath}}",
				templateArgs: {
					title: "Help improve GOV.UK",
					surveyCta: "Get involved in making government services better",
					surveyCtaPostscript: "This will open a short survey on another website"
				},
				activeWhen: {
					path: ["^/government/collections/secure-electronic-transfer$", "^/guidance/hmrc-secure-data-exchange-service-sdes$"]
				},
				allowedOnMobile: !0
			}, {
				identifier: "Business_iteration 1",
				surveyType: "url",
				frequency: 6,
				startTime: new Date("July 2, 2018").getTime(),
				endTime: new Date("July 7, 2018").getTime(),
				url: "https://GDSUserResearch.optimalworkshop.com/treejack/wu86k8e2?c={{currentPath}}",
				templateArgs: {
					title: "Help us make things easier to find on GOV.UK",
					surveyCta: "Answer 2 quick questions",
					surveyCtaPostscript: "This activity will open in a separate window"
				},
				activeWhen: {
					section: ["business/all"]
				},
				allowedOnMobile: !0
			}],
			init: function () {
				if (c.canShowAnySurvey()) {
					var e = c.getActiveSurvey(c.defaultSurvey, c.smallSurveys);
					e !== undefined && c.displaySurvey(e)
				}
			},
			canShowAnySurvey: function () {
				return !c.pathInBlacklist() && (!c.otherNotificationVisible() && (!c.userCompletedTransaction() && !(u("#user-satisfaction-survey-container").length <= 0)))
			},
			processTemplate: function (e, r) {
				return u.each(e, function (e, t) {
					r = r.replace(new RegExp("{{" + e + "}}", "g"), t)
				}), r
			},
			getUrlSurveyTemplate: function () {
				return {
					render: function (e) {
						var t = {
								title: "Tell us what you think of GOV.UK",
								surveyCta: "Take the 3 minute survey",
								surveyCtaPostscript: "This will open a short survey on another website",
								surveyUrl: c.addParamsToURL(e.url)
							},
							r = u.extend(t, e.templateArgs);
						return c.processTemplate(r, n)
					}
				}
			},
			getEmailSurveyTemplate: function () {
				return {
					render: function (e) {
						var t = {
								title: "Tell us what you think of GOV.UK",
								surveyCta: "Take a short survey to give us your feedback",
								surveyFormDescription: "We\u2019ll send you a link to a feedback form. It only takes 2 minutes to fill in.",
								surveyFormCta: "Send me the survey",
								surveyFormCtaPostscript: "Don\u2019t worry: we won\u2019t send you spam or share your email address with anyone.",
								surveyFormNoEmailInvite: "Don\u2019t have an email address?",
								surveySuccess: "Thanks, we\u2019ve sent you an email with a link to the survey.",
								surveyFailure: "Sorry, we\u2019re unable to send you an email right now. Please try again later.",
								surveyId: e.identifier,
								surveySource: c.currentPath(),
								surveyUrl: c.addParamsToURL(e.url),
								gaClientId: GOVUK.analytics.gaClientId
							},
							r = u.extend(t, e.templateArgs);
						return c.processTemplate(r, i)
					}
				}
			},
			getActiveSurveys: function (e) {
				return u.grep(e, function (e) {
					if (c.currentTime() >= e.startTime && c.currentTime() <= e.endTime) return c.activeWhen(e)
				})
			},
			getDisplayableSurveys: function (e) {
				return u.grep(e, function (e) {
					return c.isSurveyToBeDisplayed(e)
				})
			},
			getActiveSurvey: function (e, t) {
				var r = c.getActiveSurveys(t),
					n = [e].concat(r),
					i = c.getDisplayableSurveys(n);
				return i.length < 2 ? i[0] : i[Math.floor(Math.random() * i.length)]
			},
			displaySurvey: function (e) {
				var t = u("#user-satisfaction-survey-container");
				if ("email" === e.surveyType) c.displayEmailSurvey(e, t);
				else {
					if ("url" !== e.surveyType && e.surveyType !== undefined) return;
					c.displayURLSurvey(e, t)
				}
				c.incrementSurveySeenCounter(e), c.trackEvent(e.identifier, "banner_shown", "Banner has been shown")
			},
			displayURLSurvey: function (e, t) {
				var r = c.getUrlSurveyTemplate();
				t.append(r.render(e)), c.setURLSurveyEventHandlers(e)
			},
			displayEmailSurvey: function (e, t) {
				var r = c.getEmailSurveyTemplate();
				t.append(r.render(e)), c.setEmailSurveyEventHandlers(e)
			},
			addParamsToURL: function (e) {
				var t = e.replace(/\{\{currentPath\}\}/g, c.currentPath());
				return -1 !== e.indexOf("?c=") ? t + "&gcl=" + GOVUK.analytics.gaClientId : t + "?gcl=" + GOVUK.analytics.gaClientId
			},
			setEmailSurveyEventHandlers: function (i) {
				var e = u("#email-survey-open"),
					t = u("#user-survey-cancel"),
					r = u("#email-survey-pre"),
					a = u("#email-survey-form"),
					s = u("#email-survey-post-success"),
					o = u("#email-survey-post-failure"),
					n = u("#survey-email-address");
				u("#take-survey").click(function () {
					c.setSurveyTakenCookie(i), c.hideSurvey(i), c.trackEvent(i.identifier, "no_email_link", "User taken survey via no email link")
				}), e.click(function (e) {
					return i.surveyExpanded = !0, c.trackEvent(i.identifier, "email_survey_open", "Email survey opened"), r.addClass("js-hidden").attr("aria-hidden", "true"), a.removeClass("js-hidden").attr("aria-hidden", "false"), n.focus(), e.stopPropagation(), !1
				}), t.click(function (e) {
					return c.setSurveyTakenCookie(i), c.hideSurvey(i), i.surveyExpanded ? c.trackEvent(i.identifier, "email_survey_cancel", "Email survey cancelled") : c.trackEvent(i.identifier, "banner_no_thanks", "No thanks clicked"), e.stopPropagation(), !1
				}), a.submit(function (e) {
					var t = function () {
							a.addClass("js-hidden").attr("aria-hidden", "true"), s.removeClass("js-hidden").attr("aria-hidden", "false"), s.focus(), c.setSurveyTakenCookie(i), c.trackEvent(i.identifier, "email_survey_taken", "Email survey taken"), c.trackEvent(i.identifier, "banner_taken", "User taken survey")
						},
						r = function () {
							a.addClass("js-hidden").attr("aria-hidden", "true"), o.removeClass("js-hidden").attr("aria-hidden", "false"), o.focus()
						},
						n = a.attr("action");
					return /\.js$/.test(n) || (n += ".js"), u.ajax({
						type: "POST",
						url: n,
						dataType: "json",
						data: a.serialize(),
						success: t,
						error: r,
						statusCode: {
							500: r
						}
					}), e.stopPropagation(), !1
				})
			},
			setURLSurveyEventHandlers: function (t) {
				var e = u("#user-survey-cancel"),
					r = u("#take-survey");
				e.click(function (e) {
					return c.setSurveyTakenCookie(t), c.hideSurvey(t), c.trackEvent(t.identifier, "banner_no_thanks", "No thanks clicked"), e.stopPropagation(), !1
				}), r.click(function () {
					c.setSurveyTakenCookie(t), c.hideSurvey(t), c.trackEvent(t.identifier, "banner_taken", "User taken survey")
				})
			},
			isSurveyToBeDisplayed: function (e) {
				return !(c.isBeingViewedOnMobile() && !c.surveyIsAllowedOnMobile(e)) && ("true" !== GOVUK.cookie(c.surveyTakenCookieName(e)) && (!c.surveyHasBeenSeenTooManyTimes(e) && c.randomNumberMatches(e.frequency)))
			},
			pathInBlacklist: function () {
				return new RegExp("^/(?:" + /service-manual/.source + ")(?:/|$)").test(c.currentPath())
			},
			userCompletedTransaction: function () {
				function e(e, t) {
					return -1 < e.indexOf(t)
				}
				var t = c.currentPath();
				if (e(t, "/done") || e(t, "/transaction-finished") || e(t, "/driving-transaction-finished")) return !0
			},
			trackEvent: function (e, t, r) {
				window.GOVUK.analytics.trackEvent(e, t, {
					label: r,
					value: 1,
					nonInteraction: !0
				})
			},
			setSurveyTakenCookie: function (e) {
				window.GOVUK.cookie(c.surveyTakenCookieName(e), !0, {
					days: 90
				})
			},
			incrementSurveySeenCounter: function (e) {
				var t = c.surveySeenCookieName(e),
					r = c.surveySeenCount(e) + 1,
					n = c.seenTooManyTimesCooloff(e);
				n ? window.GOVUK.cookie(t, r, {
					days: n
				}) : window.GOVUK.cookie(t, r)
			},
			seenTooManyTimesCooloff: function (e) {
				return e.seenTooManyTimesCooloff ? o(e.seenTooManyTimesCooloff, undefined, 1) : undefined
			},
			hideSurvey: function () {
				u("#user-satisfaction-survey").removeClass("visible").attr("aria-hidden", "true")
			},
			randomNumberMatches: function (e) {
				return 0 === Math.floor(Math.random() * e)
			},
			otherNotificationVisible: function () {
				return 0 < u([".govuk-emergency-banner:visible", "#global-cookie-message:visible", "#global-browser-prompt:visible", "#taxonomy-survey:visible"].join(", ")).length
			},
			surveyHasBeenSeenTooManyTimes: function (e) {
				return c.surveySeenCount(e) >= c.surveySeenTooManyTimesLimit(e)
			},
			surveySeenTooManyTimesLimit: function (e) {
				var t = e.seenTooManyTimesLimit;
				return "unlimited" === String(t).toLowerCase() ? Infinity : o(t, r, 1)
			},
			surveySeenCount: function (e) {
				return o(GOVUK.cookie(c.surveySeenCookieName(e)), 0, 0)
			},
			surveyTakenCookieName: function (e) {
				return s("taken_" + e.identifier)
			},
			surveySeenCookieName: function (e) {
				return s("survey_seen_" + e.identifier)
			},
			isBeingViewedOnMobile: function () {
				return window.matchMedia(a).matches
			},
			surveyIsAllowedOnMobile: function (e) {
				return e.hasOwnProperty("allowedOnMobile") && !0 === e.allowedOnMobile
			},
			pathMatch: function (e) {
				return e !== undefined && new RegExp(u.map(u.makeArray(e), function (e) {
					return /[\^\$]/.test(e) ? "(?:" + e + ")" : "(?:/" + e + "(?:/|$))"
				}).join("|")).test(c.currentPath())
			},
			breadcrumbMatch: function (e) {
				return e !== undefined && new RegExp(u.makeArray(e).join("|"), "i").test(c.currentBreadcrumb())
			},
			sectionMatch: function (e) {
				if (e === undefined) return !1;
				var t = new RegExp(u.makeArray(e).join("|"), "i");
				return t.test(c.currentSection()) || t.test(c.currentThemes())
			},
			organisationMatch: function (e) {
				return e !== undefined && new RegExp(u.makeArray(e).join("|")).test(c.currentOrganisation())
			},
			tlsCookieMatch: function (e) {
				var t = c.currentTlsVersion();
				return e !== undefined && "" != t && t < e[0]
			},
			activeWhen: function (e) {
				if (e.hasOwnProperty("activeWhen")) {
					if (e.activeWhen.hasOwnProperty("path") || e.activeWhen.hasOwnProperty("breadcrumb") || e.activeWhen.hasOwnProperty("section") || e.activeWhen.hasOwnProperty("organisation") || e.activeWhen.hasOwnProperty("tlsCookieVersionLimit")) {
						var t = e.activeWhen.matchType || "include",
							r = c.tlsCookieMatch(e.activeWhen.tlsCookieVersionLimit),
							n = c.pathMatch(e.activeWhen.path),
							i = c.breadcrumbMatch(e.activeWhen.breadcrumb),
							a = c.sectionMatch(e.activeWhen.section),
							s = c.organisationMatch(e.activeWhen.organisation),
							o = r || n || i || a || s;
						return "exclude" !== t ? o : !o
					}
					return !0
				}
				return !0
			},
			currentTime: function () {
				return (new Date).getTime()
			},
			currentPath: function () {
				return window.location.pathname
			},
			currentBreadcrumb: function () {
				return u(".gem-c-breadcrumbs").text() || ""
			},
			currentSection: function () {
				return u('meta[name="govuk:section"]').attr("content") || ""
			},
			currentThemes: function () {
				return u('meta[name="govuk:themes"]').attr("content") || ""
			},
			currentOrganisation: function () {
				return u('meta[name="govuk:analytics:organisations"]').attr("content") || ""
			},
			currentTlsVersion: function () {
				var e = GOVUK.getCookie("TLSversion");
				return null == e || "unknown" == e ? "" : parseFloat(e.replace("TLSv", "")) || ""
			}
		},
		s = function (e) {
			return "govuk_" + e.replace(/(\_\w)/g, function (e) {
				return e.charAt(1).toUpperCase()
			})
		},
		o = function (e, t, r) {
			var n = parseInt(e, 10);
			return isNaN(n) || n < r ? t : n
		};
	window.GOVUK.userSurveys = c, u(document).ready(function () {
		GOVUK.userSurveys && (GOVUK.analytics && GOVUK.analytics.gaClientId ? window.GOVUK.userSurveys.init() : u(window).on("gaClientSet", function () {
			window.GOVUK.userSurveys.init()
		}))
	})
}(window.jQuery);
