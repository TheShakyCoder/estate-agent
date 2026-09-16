<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <title>Verify your email — {{ config('app.name') }}</title>
    <style type="text/css">
        @media only screen and (max-width: 600px) {
            .email-wrapper { width: 100% !important; }
            .email-body    { width: 100% !important; padding: 32px 20px !important; }
            .btn-primary   { width: 100% !important; display: block !important; text-align: center !important; }
        }
    </style>
</head>
<body style="margin:0;padding:0;background-color:#fbf9f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-text-size-adjust:none;">

    <!-- Outer wrapper -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fbf9f5;">
        <tr>
            <td align="center" style="padding:40px 16px;">

                <!-- Email card -->
                <table class="email-wrapper" width="560" cellpadding="0" cellspacing="0" border="0"
                       style="width:560px;background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.06);border:1px solid #ece3d1;">

                    <!-- ── Header banner ── -->
                    <tr>
                        <td style="background:linear-gradient(135deg,#0c1827 0%,#13243a 55%,#2f5278 100%);padding:48px 40px 40px;text-align:center;">

                            <!-- Logo -->
                            <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto 18px;">
                                <tr>
                                    <td width="76" height="76" align="center" valign="middle" style="background-color:rgba(255,255,255,0.10);border-radius:8px;">
                                        <span style="font-size:36px;line-height:1;">&#127968;</span>
                                    </td>
                                </tr>
                            </table>

                            <p style="margin:0 0 6px;font-size:11px;font-weight:600;color:rgba(255,255,255,0.7);letter-spacing:4px;text-transform:uppercase;">
                                Sales &middot; Lettings &middot; Valuations
                            </p>
                            <p style="margin:0;font-size:22px;font-weight:600;color:#ffffff;letter-spacing:-0.3px;font-family:Georgia,'Times New Roman',serif;">
                                Acme Estate Agents
                            </p>
                        </td>
                    </tr>

                    <!-- ── Body ── -->
                    <tr>
                        <td class="email-body" style="padding:48px 48px 36px;">

                            <!-- Greeting -->
                            <p style="margin:0 0 12px;font-size:24px;font-weight:600;color:#22211d;letter-spacing:-0.4px;font-family:Georgia,'Times New Roman',serif;">
                                Welcome, {{ $user->name }}
                            </p>
                            <p style="margin:0 0 28px;font-size:15px;color:#65604f;line-height:1.7;">
                                Thanks for registering with Acme Estate Agents. Before we set up property alerts and applicant matches,
                                please confirm this is your email address.
                            </p>

                            <!-- Divider line accent -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                                <tr>
                                    <td style="height:2px;background:linear-gradient(90deg,#2f5278,#c2953d,transparent);border-radius:2px;"></td>
                                </tr>
                            </table>

                            <!-- CTA button -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
                                <tr>
                                    <td align="center">
                                        <a href="{{ $verificationUrl }}"
                                           class="btn-primary"
                                           style="display:inline-block;background-color:#1b324f;color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;padding:16px 40px;border-radius:4px;letter-spacing:2px;text-transform:uppercase;">
                                            Verify My Email
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <!-- Expiry notice -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                   style="background-color:#eef2f7;border:1px solid #d6dfeb;border-radius:6px;margin-bottom:28px;">
                                <tr>
                                    <td style="padding:14px 18px;">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td valign="top" style="padding-right:10px;font-size:18px;line-height:1;">⏱</td>
                                                <td style="font-size:13px;color:#1b324f;line-height:1.5;">
                                                    This link will expire in <strong>{{ $expiresMinutes }} minutes</strong>.
                                                    If it does, just sign in and request a new one.
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- Didn't request notice -->
                            <p style="margin:0;font-size:13px;color:#8c8576;line-height:1.6;">
                                If you didn't sign up for an account with Acme Estate Agents,
                                you can safely ignore this email — no account will be created.
                            </p>

                        </td>
                    </tr>

                    <!-- ── Fallback URL section ── -->
                    <tr>
                        <td style="padding:0 48px 36px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                   style="background-color:#f6f1e8;border:1px solid #ece3d1;border-radius:6px;">
                                <tr>
                                    <td style="padding:16px 20px;">
                                        <p style="margin:0 0 6px;font-size:11px;font-weight:600;color:#65604f;text-transform:uppercase;letter-spacing:2px;">
                                            Button not working?
                                        </p>
                                        <p style="margin:0 0 8px;font-size:12px;color:#8c8576;line-height:1.5;">
                                            Copy and paste this link into your browser:
                                        </p>
                                        <p style="margin:0;font-size:11px;color:#1b324f;word-break:break-all;line-height:1.5;">
                                            {{ $verificationUrl }}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- ── Footer ── -->
                    <tr>
                        <td style="background-color:#22211d;padding:32px 40px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center">
                                        <p style="margin:0 0 4px;font-size:16px;font-weight:600;color:#ffffff;font-family:Georgia,'Times New Roman',serif;letter-spacing:-0.2px;">
                                            {{ config('site.fullname') }}
                                        </p>
                                        <p style="margin:0 0 14px;font-size:12px;color:rgba(255,255,255,0.45);">
                                            {{ config('site.address') }}
                                        </p>
                                        <p style="margin:0 0 18px;font-size:10px;color:rgba(255,255,255,0.3);letter-spacing:3px;text-transform:uppercase;">
                                            Independent &middot; Local since {{ config('site.established') }}
                                        </p>
                                        <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.25);">
                                            <a href="{{ config('app.url') }}" style="color:rgba(255,255,255,0.5);text-decoration:none;">Visit the website</a>
                                            &nbsp;&middot;&nbsp;
                                            <a href="mailto:{{ config('mail.from.address') }}" style="color:rgba(255,255,255,0.5);text-decoration:none;">{{ config('mail.from.address') }}</a>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>
                <!-- /Email card -->

                <p style="margin:20px 0 0;font-size:12px;color:#8c8576;text-align:center;">
                    You received this email because an account was created at
                    <a href="{{ config('app.url') }}" style="color:#1b324f;text-decoration:none;">{{ parse_url(config('app.url'), PHP_URL_HOST) }}</a>
                    using this address.
                </p>

            </td>
        </tr>
    </table>

</body>
</html>
