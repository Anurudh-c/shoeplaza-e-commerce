$(document).ready(function () {

    $("#payWithRazorpay").click(function (e) {
        console.log("checkout.js loaded successfully");
        console.log("im g=here");
        e.preventDefault();

        var first_name = $("[name='first_name']").val();
        var last_name = $("[name='last_name']").val();
        var email = $("[name='email']").val();
        var address = $("[name='addressSelected']").val();
        var phone = $("[name='phone']").val();
        var address_line_1 = $("[name='address_line_1']").val();
        var city = $("[name='city']").val();
        var state = $("[name='state']").val();
        var country = $("[name='country']").val();
        var zip_code = $("[name='zip_code']").val();
        var token = $("[name='csrfmiddlewaretoken']").val();
        var grand_total = $("[name='grand_total']").val();
        var couponCode = $("[name='couponCode']").val();
        var couponDiscount = $("[name='couponDiscount']").val();
        var amountToBePaid = $("[name='amountToBePaid']").val();
      
        console.log(first_name,last_name,email,phone,address_line_1,city,state,country,zip_code);


        if (
            first_name == "" ||

            last_name == "" ||
            email == "" ||
            phone == "" ||
            address_line_1 == "" ||
            city == "" ||
            state == "" ||
            country == "" ||
            zip_code == "" 

        ) {
            swal("alert", "All fields are mandatory", "error");
            return false;
        } else {
            console.log("im in else");
            console.log(amountToBePaid);

    

            
            $.ajax({

                method: "GET",
                url: "proceed_to_pay/",
                contentType: "application/json",
                success: function (response) {
                    console.log("im in se");

                    console.log(response, amountToBePaid);
                    var options = {
                        key: "shoeplaza.settings.API_KEY", // Enter the Key ID generated from the Dashboard
                        amount: amountToBePaid *100, //response.total_price *100 , // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        currency: "INR",
                        name: "Anurudh C",
                        description: "Thank you",
                        // image: "",
                        handler: function (responseb) {
                            // alert(responseb.razorpay_payment_id);
                            console.log("56");
                            data = {
                                'first_name': first_name,
                                'last_name': last_name,
                                'email': email,
                                'phone': phone,
                                'address_line_1': address_line_1,
                                'city': city,
                                'state': state,
                                'addressSelected': address,
                                'country': country,
                                'zip_code': zip_code,
                                'payment_method': "Paid by Razorpay",
                                'payment_id': responseb.razorpay_payment_id,
                                'csrfmiddlewaretoken': token,
                                'amountToBePaid': amountToBePaid,
                                'couponCode': couponCode,
                                'couponDiscount': couponDiscount,
                                'grand_total': grand_total

                            };
                            console.log(grand_total)
                            $.ajax({
                                method: "POST",
                                url: "place_order/",
                                data: data,
                                success: function (responsec) {
                                    swal("Congratulations!", responsec.status, "success").then(
                                        (value) => {
                                            console.log("93");
                                            window.location.href =
                                                "order-complete/" +
                                                "?payment_id=" +
                                                data.payment_id;
                                        }
                                    );

                                },
                            });
                            console.log("why not");
                        },
                        prefill: {

                            email: email,
                            contact: phone,
                        },
                        notes: {
                            address: "Shoeplaza India Pvt Ltd",
                        },
                        theme: {
                            color: "#3399cc",
                        },
                    };
                    var rzp1 = new Razorpay(options);
                    rzp1.open();
                },
            });
        }
    });
})